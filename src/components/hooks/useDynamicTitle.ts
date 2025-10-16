import { useEffect } from 'react';

/**
 * useDynamicTitle
 * 
 * Observes visible <section> elements with an id and updates
 * document.title dynamically based on the section in view.
 * 
 * @param siteName - The base title (e.g. "FOOD MESSAGE")
 * @param selector - CSS selector for observed sections (default: 'section[id]')
 * @param threshold - Intersection threshold (default: 0.6)
 */
export function useDynamicTitle(
    siteName: string,
    selector: string = 'section[id], section[data-title]',
    threshold: number = .8
): void {
    useEffect(() => {
        if (typeof document === 'undefined') return;
        const sections = document.querySelectorAll(selector);
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((e) => e.isIntersecting);
                if (visible) {
                    const dataTitle = visible.target.getAttribute('data-title');
                    const id = visible.target.getAttribute('id');
                    const title = dataTitle || (id ? id.charAt(0).toUpperCase() + id.slice(1) : '');
                    if (title) {
                        document.title = `${siteName} | ${title}`;
                    }
                }
            },
            { threshold }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, [siteName, selector, threshold]);
}
