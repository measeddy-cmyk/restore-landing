import { Animate } from "@/components/Animate";

const CTA_URL = "https://eddymeas.systeme.io/b8a23fda";
const STUDENT_URL = "https://measeddy.vercel.app/learn/sign-in";

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--black)", color: "var(--text)", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", overflowX: "hidden" }}>

      {/* NAV */}
      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, backgroundColor: "rgba(8,8,8,0.95)", backdropFilter: "blur(10px)", zIndex: 100 }}>
        <span style={{ fontSize: "1.2rem", fontWeight: 900, color: "var(--orange)", letterSpacing: "0.15em", textTransform: "uppercase" }}>RESTORE™</span>
        <a href={CTA_URL} target="_blank" rel="noopener noreferrer" style={{ padding: "10px 22px", backgroundColor: "var(--orange)", color: "var(--text)", borderRadius: "8px", textDecoration: "none", fontWeight: 700, fontSize: "0.875rem" }}>
          Accéder à la formation
        </a>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "92vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 24px", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(circle, var(--orange-glow) 0%, transparent 70%)", pointerEvents: "none" }} />

        <Animate type="fadeUp" delay={0}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", backgroundColor: "var(--orange-glow)", border: "1px solid rgba(255,107,0,0.3)", borderRadius: "100px", marginBottom: "32px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--orange)", display: "inline-block" }} />
            <span style={{ fontSize: "0.8rem", color: "var(--orange)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Formation pour hommes</span>
          </div>
        </Animate>

        <Animate type="fadeUp" delay={100}>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "24px", maxWidth: "800px" }}>
            Reprends le contrôle de ta{" "}
            <span style={{ color: "var(--orange)" }}>santé sexuelle.</span>
            <br />Complètement.
          </h1>
        </Animate>

        <Animate type="fadeUp" delay={200}>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "var(--muted2)", maxWidth: "580px", lineHeight: 1.7, marginBottom: "48px" }}>
            T&apos;as essayé d&apos;en parler. T&apos;as cherché sur internet. T&apos;as trouvé du vide.<br />
            RESTORE™ c&apos;est la formation que t&apos;aurais voulu avoir bien plus tôt.
          </p>
        </Animate>

        <Animate type="fadeUp" delay={300}>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "18px 40px", backgroundColor: "var(--orange)", color: "var(--text)", borderRadius: "12px", textDecoration: "none", fontWeight: 800, fontSize: "1.1rem", boxShadow: "0 0 40px rgba(255,107,0,0.3)" }}>
            Accéder à la formation <span>→</span>
          </a>
          <p style={{ marginTop: "16px", fontSize: "0.8rem", color: "var(--muted)" }}>Des centaines d&apos;hommes ont déjà fait le premier pas.</p>
        </Animate>
      </section>

      {/* PROBLÈME */}
      <section style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <Animate type="fadeUp">
          <p style={{ color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "16px", textAlign: "center" }}>La vérité</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 900, textAlign: "center", marginBottom: "20px" }}>Personne t&apos;a appris ça.</h2>
          <p style={{ color: "var(--muted)", textAlign: "center", maxWidth: "560px", margin: "0 auto 60px", lineHeight: 1.7 }}>
            L&apos;école, tes parents, tes amis — tout le monde a esquivé le sujet. Résultat : t&apos;avances à l&apos;aveugle dans un domaine crucial de ta vie d&apos;homme.
          </p>
        </Animate>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {[
            { icon: "💭", text: "Tu te demandes si ce que tu vis est \"normal\"" },
            { icon: "📉", text: "Ton énergie et ta confiance en ont pris un coup" },
            { icon: "🔒", text: "Tu gardes tout pour toi parce que c'est tabou" },
            { icon: "🔍", text: "Tu cherches des réponses mais tu trouves du vide ou du n'importe quoi" },
          ].map((item, i) => (
            <Animate key={i} type="fadeUp" delay={i * 100}>
              <div style={{ padding: "24px", backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", display: "flex", gap: "16px", height: "100%" }}>
                <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                <p style={{ color: "var(--text2)", fontSize: "0.95rem", lineHeight: 1.6 }}>{item.text}</p>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* CE QUE TU VAS APPRENDRE */}
      <section style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <Animate type="fadeUp">
          <p style={{ color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "16px", textAlign: "center" }}>Le programme</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 900, textAlign: "center", marginBottom: "16px" }}>Ce que tu vas apprendre</h2>
          <p style={{ color: "var(--muted)", textAlign: "center", maxWidth: "520px", margin: "0 auto 56px", lineHeight: 1.7 }}>Un programme structuré, progressif, pensé pour t&apos;amener là où tu veux être.</p>
        </Animate>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {[
            { num: "01", title: "Les bases que personne ne t'a enseignées", desc: "Comprendre ton anatomie, ton cycle hormonal et ce qui influence vraiment ta santé sexuelle." },
            { num: "02", title: "La testostérone — démystifiée", desc: "Comment l'optimiser naturellement : alimentation, sommeil, entraînement, stress. Sans bullshit." },
            { num: "03", title: "Performance et confiance", desc: "Les vraies causes des blocages et comment les lever une bonne fois pour toutes." },
            { num: "04", title: "Nutrition & style de vie", desc: "Ce que tu mets dans ton corps a un impact direct. On t'explique quoi faire concrètement." },
            { num: "05", title: "La dimension mentale", desc: "Anxiété de performance, estime de soi, rapport au corps — tout ce qui se passe dans ta tête." },
            { num: "06", title: "Protocoles & routines", desc: "Des plans d'action clairs à appliquer semaine par semaine pour ancrer les changements." },
          ].map((item, i) => (
            <Animate key={i} type={i % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={i * 80}>
              <div style={{ display: "flex", gap: "24px", alignItems: "flex-start", padding: "28px 0", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "var(--border2)", flexShrink: 0, minWidth: "50px" }}>{item.num}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "6px" }}>{item.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
                <span style={{ color: "var(--orange)", fontSize: "1.2rem", flexShrink: 0 }}>→</span>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ padding: "80px 24px", backgroundColor: "var(--dark)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Animate type="fadeUp">
            <p style={{ color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "16px", textAlign: "center" }}>La solution</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 900, textAlign: "center", marginBottom: "20px" }}>Ce que RESTORE™ va changer pour toi</h2>
            <p style={{ color: "var(--muted)", textAlign: "center", maxWidth: "560px", margin: "0 auto 60px", lineHeight: 1.7 }}>Une formation conçue par un homme, pour les hommes. Pas de tabous. Pas de jugement.</p>
          </Animate>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {[
              { icon: "🧠", title: "Comprendre ton corps", desc: "Enfin comprendre comment tu fonctionnes vraiment — sans les mythes ni les raccourcis." },
              { icon: "⚡", title: "Retrouver ton énergie", desc: "Optimise ta vitalité, ta testostérone naturelle et ton élan au quotidien." },
              { icon: "💪", title: "Reprendre confiance", desc: "Construis une confiance solide, ancrée dans la connaissance de toi-même." },
              { icon: "🎯", title: "Des protocoles concrets", desc: "Des actions précises à appliquer dès aujourd'hui, pas de la théorie inutile." },
              { icon: "🗣️", title: "Parler de ce qui compte", desc: "Apprends à aborder ces sujets sans malaise avec tes proches." },
              { icon: "🔓", title: "Un espace sans jugement", desc: "Un cadre privé et sécurisé pour progresser à ton rythme." },
            ].map((item, i) => (
              <Animate key={i} type="fadeUp" delay={i * 80}>
                <div style={{ padding: "28px", backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", height: "100%" }}>
                  <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "14px" }}>{item.icon}</span>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px", alignItems: "center" }}>
          <Animate type="fadeLeft">
            <div>
              <p style={{ color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "16px" }}>Ton formateur</p>
              <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 900, marginBottom: "20px" }}>À propos de moi</h2>
              <p style={{ color: "var(--muted2)", lineHeight: 1.8, marginBottom: "16px", fontSize: "0.95rem" }}>
                Je m&apos;appelle <strong style={{ color: "var(--text)" }}>Eddy Meas</strong>. J&apos;ai traversé moi-même ce que beaucoup d&apos;hommes vivent en silence — la confusion, le silence, la honte parfois.
              </p>
              <p style={{ color: "var(--muted2)", lineHeight: 1.8, marginBottom: "16px", fontSize: "0.95rem" }}>
                RESTORE™ est né de ma propre reconstruction. J&apos;ai compilé tout ce que j&apos;aurais voulu savoir plus tôt pour que toi tu n&apos;aies pas à chercher pendant des années.
              </p>
              <p style={{ color: "var(--muted2)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                Je suis pas un médecin qui te parle depuis sa tour d&apos;ivoire. Je suis un homme qui a fait le chemin, et qui te tend la main.
              </p>
            </div>
          </Animate>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { label: "Hommes accompagnés", value: "200+" },
              { label: "Modules de formation", value: "6" },
              { label: "Protocoles concrets", value: "30+" },
            ].map((stat, i) => (
              <Animate key={i} type="fadeRight" delay={i * 120}>
                <div style={{ padding: "24px 28px", backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <p style={{ fontSize: "2rem", fontWeight: 900, color: "var(--orange)", lineHeight: 1 }}>{stat.value}</p>
                  <p style={{ color: "var(--muted)", fontSize: "0.875rem", marginTop: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section style={{ padding: "80px 24px", maxWidth: "700px", margin: "0 auto" }}>
        <Animate type="fadeUp">
          <p style={{ color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "16px", textAlign: "center" }}>Pour qui ?</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 900, textAlign: "center", marginBottom: "48px" }}>Cette formation est faite pour toi si…</h2>
        </Animate>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            "Tu as entre 18 et 50 ans et tu veux comprendre ton corps en profondeur",
            "Tu ressens une baisse de libido, d'énergie ou de confiance",
            "Tu veux des réponses concrètes, pas des généralités",
            "Tu es prêt à investir du temps et de l'énergie dans ta santé",
            "Tu veux avancer sans avoir à tout expliquer à un médecin gêné",
          ].map((text, i) => (
            <Animate key={i} type="fadeLeft" delay={i * 100}>
              <div style={{ display: "flex", gap: "14px", padding: "18px 20px", backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "10px" }}>
                <span style={{ color: "var(--orange)", fontWeight: 900, flexShrink: 0 }}>✓</span>
                <p style={{ color: "var(--text2)", fontSize: "0.95rem", lineHeight: 1.5 }}>{text}</p>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "100px 24px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "500px", height: "300px", background: "radial-gradient(ellipse, var(--orange-glow) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Animate type="fadeUp">
          <p style={{ color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "20px" }}>Le moment c&apos;est maintenant</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 900, maxWidth: "600px", margin: "0 auto 20px", lineHeight: 1.2 }}>
            T&apos;attends quoi pour reprendre le contrôle ?
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: "480px", margin: "0 auto 40px", lineHeight: 1.7 }}>
            Chaque jour qui passe c&apos;est un jour de plus sans réponses. Le premier pas commence ici.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "20px 48px", backgroundColor: "var(--orange)", color: "var(--text)", borderRadius: "12px", textDecoration: "none", fontWeight: 800, fontSize: "1.15rem", boxShadow: "0 0 60px rgba(255,107,0,0.35)" }}>
            Accéder à la formation <span>→</span>
          </a>
          <p style={{ marginTop: "20px", fontSize: "0.8rem", color: "var(--muted)" }}>
            Déjà inscrit ?{" "}
            <a href={STUDENT_URL} style={{ color: "var(--muted2)", textDecoration: "underline" }}>Accéder à mon espace</a>
          </p>
        </Animate>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 24px", textAlign: "center" }}>
        <span style={{ fontSize: "1rem", fontWeight: 900, color: "var(--orange)", letterSpacing: "0.15em", textTransform: "uppercase" }}>RESTORE™</span>
        <p style={{ color: "var(--muted)", fontSize: "0.8rem", marginTop: "8px" }}>Formation en santé sexuelle masculine · Tous droits réservés</p>
      </footer>

    </div>
  );
}
