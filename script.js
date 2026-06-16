function generatePrompt() {

    const topic =
        document.getElementById("topic").value;

    const audience =
        document.getElementById("audience").value;

    const tone =
        document.getElementById("tone").value;

    const format =
        document.getElementById("format").value;

    const length =
        document.getElementById("length").value;

    let prompt = "";

    if(format === "blog") {

        prompt = `

Write a high-quality SEO blog article.

TOPIC:
${topic}

TARGET AUDIENCE:
${audience}

TONE:
${tone}

WORD COUNT:
${length}

Requirements:

1. Generate an engaging title.

2. Write an introduction.

3. Use H2 and H3 headings.

4. Include practical examples.

5. Add latest trends and insights.

6. Include SEO keywords.

7. Add FAQs.

8. Write a strong conclusion.

9. Use markdown formatting.

10. Keep content engaging.

`;

    }

    else {

        prompt = `

Create a professional presentation.

TOPIC:
${topic}

AUDIENCE:
${audience}

TONE:
${tone}

NUMBER OF SLIDES:
${length}

For EACH slide provide:

• Slide title

• Key bullet points

• Speaker notes

• Visual recommendation

• Infographic suggestion

• Icon suggestion

Presentation Structure:

Slide 1:
Title Slide

Slide 2:
Problem Overview

Slide 3:
Background

Slide 4:
Main Concept

Slide 5:
Case Study

Slide 6:
Benefits

Slide 7:
Challenges

Slide 8:
Future Trends

Slide 9:
Summary

Slide 10:
Q&A

`;

    }

    document
        .getElementById("output")
        .value = prompt;
}

function copyPrompt() {

    const text =
        document.getElementById("output");

    text.select();

    navigator.clipboard.writeText(
        text.value
    );

    alert("Prompt copied!");
}