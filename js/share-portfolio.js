(() => {
    "use strict";

    const PORTFOLIO_URL =
        "https://waldoJU.github.io/portafolio-tecnico/";

    const SHARE_TEXT =
        "Conoce mi portafolio profesional: Ingeniería en Sistemas, Redes, Ciberseguridad, Diseño Gráfico y Desarrollo Web.";

    function shareWhatsApp() {
        const url =
            "https://wa.me/?text=" +
            encodeURIComponent(
                SHARE_TEXT + "\n\n" + PORTFOLIO_URL
            );

        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );
    }

    function shareFacebook() {
        const url =
            "https://www.facebook.com/sharer/sharer.php?u=" +
            encodeURIComponent(PORTFOLIO_URL);

        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );
    }

    async function shareNative() {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Waldo José J. | Portafolio",
                    text: SHARE_TEXT,
                    url: PORTFOLIO_URL
                });

                return;
            } catch (error) {
                if (error.name === "AbortError") {
                    return;
                }
            }
        }

        try {
            await navigator.clipboard.writeText(
                PORTFOLIO_URL
            );

            alert(
                "Enlace del portafolio copiado."
            );
        } catch {
            window.prompt(
                "Copia el enlace:",
                PORTFOLIO_URL
            );
        }
    }

    window.sharePortfolio = {
        whatsapp: shareWhatsApp,
        facebook: shareFacebook,
        native: shareNative
    };
})();
