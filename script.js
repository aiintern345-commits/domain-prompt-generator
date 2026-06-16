const useCases = [
    "Market Research",
    "Customer Persona Development",
    "Competitor Analysis",
    "Marketing Strategy",
    "Risk Assessment",
    "Product Innovation",
    "Business Reporting",
    "Data Analysis",
    "Customer Support",
    "Executive Decision Making",
    "Digital Transformation",
    "Revenue Growth",
    "Customer Retention",
    "Operational Excellence",
    "AI Adoption Strategy"
];

const booklet = document.getElementById("booklet");

document
    .getElementById("generateBtn")
    .addEventListener("click", generateBooklet);

document
    .getElementById("downloadBtn")
    .addEventListener("click", downloadBooklet);

function generateBooklet() {

    const domain =
        document.getElementById("domain").value.trim();

    const company =
        document.getElementById("company").value.trim();

    const audience =
        document.getElementById("audience").value.trim();

    const region =
        document.getElementById("region").value.trim();

    const count =
        parseInt(
            document.getElementById("promptCount").value
        );

    if (!domain) {
        alert("Please enter a domain.");
        return;
    }

    booklet.innerHTML = "";

    useCases
        .slice(0, count)
        .forEach((useCase, index) => {

        const prompt = createPrompt(
            domain,
            company,
            audience,
            region,
            useCase
        );

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <div class="card-header">
                <span class="badge">
                    Prompt ${index + 1}
                </span>

                <h3>${useCase}</h3>
            </div>

            <p class="description">
                AI prompt template for
                <strong>${domain}</strong>
                domain.
            </p>

            <pre
                class="prompt"
                id="prompt-${index}">
${prompt}
            </pre>

            <button
                class="copy-btn"
                onclick="copyPrompt(${index})">
                📋 Copy Prompt
            </button>
        `;

        booklet.appendChild(card);
    });

    document
        .querySelector(".output-section")
        .scrollIntoView({
            behavior: "smooth"
        });
}

function createPrompt(
    domain,
    company,
    audience,
    region,
    useCase
) {

return `ROLE:
You are a Senior ${domain} Consultant.

DOMAIN:
${domain}

COMPANY:
${company || "[COMPANY NAME]"}

TARGET AUDIENCE:
${audience || "[TARGET AUDIENCE]"}

REGION:
${region || "[REGION]"}

OBJECTIVE:
Perform ${useCase}.

DELIVERABLES:

1. Executive Summary

2. Industry Trends

3. Market Opportunities

4. Competitive Analysis

5. Risks & Challenges

6. Strategic Recommendations

7. KPI Framework

8. Implementation Roadmap

9. Success Metrics

10. Conclusion

OUTPUT FORMAT:
Use tables, bullet points and actionable recommendations.`;
}

function copyPrompt(index) {

    const text =
        document.getElementById(
            `prompt-${index}`
        ).innerText;

    navigator.clipboard.writeText(text);

    alert("Prompt Copied Successfully!");
}

function downloadBooklet() {

    if (!booklet.innerText) {
        alert("Generate booklet first.");
        return;
    }

    const blob = new Blob(
        [booklet.innerText],
        {
            type: "text/plain"
        }
    );

    const link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(blob);

    link.download =
        "Domain-Prompt-Booklet.txt";

    link.click();
}