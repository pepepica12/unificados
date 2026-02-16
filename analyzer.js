xport default function analyze(event) {
    const issues = [];

    if (event.type === "form_submit") {
        if (!event.payload || Object.keys(event.payload).length === 0) {
            issues.push("Formulario enviado sin payload");
        }
    }

    if (event.type === "js_error") {
        issues.push("Error silencioso detectado");
    }

    return issues;
}
