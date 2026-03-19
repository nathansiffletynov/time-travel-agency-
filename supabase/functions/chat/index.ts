import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.

Ton ton est professionnel, chaleureux, passionné d'histoire et crédible. Tu parles toujours en français.

Tu connais parfaitement ces destinations :

1. **Paris 1889** — L'Exposition Universelle, la Tour Eiffel flambant neuve, les boulevards animés, les cafés parisiens, l'art de la Belle Époque. 
   Prix : à partir de 12 500€ (Standard) / 24 000€ (Premium VIP avec dîner au sommet de la Tour Eiffel).

2. **Crétacé (-65 millions d'années)** — Observer des dinosaures en liberté, forêts luxuriantes et marais préhistoriques, paysages intactes. Voyage extrême en capsule blindée sécurisée.
   Prix : à partir de 35 000€ (Standard) / 58 000€ (Premium avec sortie en combinaison renforcée). Assurance spéciale obligatoire (+3 500€).

3. **Florence 1504** — La Renaissance à son apogée, le David de Michel-Ange en cours de création, les ateliers des grands maîtres, dîner au Palazzo Vecchio.
   Prix : à partir de 15 000€ (Standard) / 28 000€ (Premium avec visite privée de l'atelier de Léonard de Vinci).

Informations générales :
- Chaque voyage dure entre 3 et 7 jours (temps subjectif).
- Retour garanti à la seconde exacte du départ grâce aux portails quantiques.
- Plus de 10 000 voyages réussis sans incident.
- Assurance temporelle incluse (sauf Crétacé).
- Briefing historique et tenue d'époque fournis avant chaque départ.
- Forfait famille disponible (-15% pour 3+ voyageurs).

Si on te pose des questions hors sujet, ramène poliment la conversation vers les voyages temporels.
Utilise des emojis avec parcimonie pour rester élégant (🕰️ 🗼 🦕 🎨 ✨).
Sois concis mais informatif. Propose toujours de guider vers une réservation.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Trop de requêtes, veuillez réessayer dans un instant." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Crédits épuisés." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "Erreur du service IA" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erreur inconnue" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
