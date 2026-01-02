function timeAgo(dateString: string) {
    const rtf = new Intl.RelativeTimeFormat("es", { numeric: "auto" });

    const now = new Date();
    const past = new Date(dateString);
    const diff = now.getTime() - past.getTime();

    const seconds = Math.round(diff / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    const months = Math.round(days / 30);
    const years = Math.round(days / 365);

    if (years >= 1) return rtf.format(-years, "year");
    if (months >= 1) return rtf.format(-months, "month");
    if (days >= 1) return rtf.format(-days, "day");
    if (hours >= 1) return rtf.format(-hours, "hour");
    if (minutes >= 1) return rtf.format(-minutes, "minute");

    return rtf.format(-seconds, "second");
}

function formatShortDate(dateString: string) {
    return new Intl.DateTimeFormat("es-ES").format(new Date(dateString));
}


function capitalize(text?: string) {
    if (!text) return "";
    return text[0].toUpperCase() + text.slice(1);
}

export { timeAgo, capitalize, formatShortDate }