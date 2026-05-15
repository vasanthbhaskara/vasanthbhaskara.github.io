---
permalink: /
title: "Vasanth Bhaskara"
author_profile: true
classes: wide
show_title: false
modified: 2026-05-15
redirect_from:
  - /about/
  - /about.html
header:
  preview_card_image: profile_pic.png
---

<section class="hero-grid">
  <div class="hero-copy">
    <p>I bring a strong foundation in <strong>mathematics, computational problem-solving, engineering, and business acumen</strong>, developed at NIT Calicut and sharpened through work on data-intensive business problems.</p>
    <p>At <a href="https://www.zs.com/">ZS</a>, I work on high-impact commercial analytics in healthcare and pharmaceuticals, with experience in marketing mix modeling, feature engineering, regression workflows, and patient-level analysis. Before that, at <a href="https://www.hindustanpetroleum.com/">Hindustan Petroleum</a>, I worked on condition monitoring systems, refinery reliability workflows, and engineering operations support at the Visakh Refinery.</p>
    <p>I recently earned the <strong>Databricks Certified Data Engineer Associate</strong> certification and continue building depth in Spark, distributed data systems, and decision-focused analytics.</p>
    <p><strong>Contact</strong>: <code style="color: #000000; background: #ffffff;"><strong>vasanthsbhaskara [at] gmail [dot] com</strong></code></p>
  </div>
</section>

<div class="news-flash">
  <div class="news-header">
    <strong class="news-badge"><span class="star">★</span> NEWS</strong>
  </div>
  <ul class="news-list">
    <li><strong>May 2026</strong> - Added a biomedical RAG system and LoRA fine-tuning work to my project portfolio.</li>
    <li><strong>November 2025</strong> - Passed the Databricks Certified Data Engineer Associate exam.</li>
    <li><strong>February 2025</strong> - Joined ZS in Pune in a decision analytics role focused on commercial healthcare applications.</li>
  </ul>
</div>

## Education

<article class="resume-card">
  <div class="resume-card__header">
    <div>
      <h3>B.Tech. in Mechanical Engineering</h3>
      <p class="resume-card__org"><a href="https://www.nitc.ac.in/">National Institute of Technology Calicut</a></p>
    </div>
    <img src="./../images/iitg.png" width="64" height="64" alt="NIT Calicut">
  </div>
  <p class="resume-card__meta">December 2020 - May 2024</p>
  <ul class="clean-list">
    <li>Graduated with a CGPA of 9.25 / 10.0 and Department Rank 3 out of 210.</li>
    <li>Relevant coursework included Machine Learning, Statistics, Probability, and Computer Programming.</li>
    <li>Built a strong quantitative base that now supports my work in analytics, machine learning, and data-driven problem solving.</li>
  </ul>
</article>

## Experience

<section class="stack-grid">
  <article class="resume-card">
    <div class="resume-card__header">
      <div>
        <h3>Decision Analytics Associate</h3>
        <p class="resume-card__org"><a href="https://www.zs.com/">ZS Associates</a></p>
      </div>
      <img src="./../images/zs-logo.svg" width="64" height="64" alt="ZS logo">
    </div>
    <p class="resume-card__meta">Pune, Maharashtra, India | February 2025 - Present</p>
    <ul class="clean-list">
      <li>Developed promotion impact models for Johnson &amp; Johnson immunology brands using linear and Bayesian regression to quantify channel-level contribution and improve omnichannel marketing effectiveness.</li>
      <li>Engineered ETL and analytical data pipelines using SQL, AWS Redshift, and Pandas for large-scale promotional and sales datasets following medallion-style architecture principles.</li>
      <li>Built transformation pipelines with adstocking, lagging, normalization, and logarithmic features to model carryover effects and improve attribution quality across channels.</li>
      <li>Worked within data science and advanced analytics workflows for commercial healthcare applications, balancing modeling rigor with business usability.</li>
    </ul>
  </article>

  <article class="resume-card">
    <div class="resume-card__header">
      <div>
        <h3>Engineer</h3>
        <p class="resume-card__org"><a href="https://www.hindustanpetroleum.com/">Hindustan Petroleum</a></p>
      </div>
      <img src="./../images/hpcl-logo.png" width="64" height="64" alt="HPCL logo">
    </div>
    <p class="resume-card__meta">Visakhapatnam, Andhra Pradesh, India | August 2024 - February 2025</p>
    <ul class="clean-list">
      <li>Conducted condition monitoring for critical refinery equipment using Honeywell Forge and Bently Nevada software.</li>
      <li>Supported engineering workflows around equipment health, maintenance reliability, and large-scale industrial monitoring.</li>
      <li>Built operational perspective on working with safety-critical systems, process discipline, and engineering execution in production environments.</li>
    </ul>
  </article>
</section>

## Research Experience

<article class="resume-card">
  <div class="resume-card__header">
    <div>
      <h3>Summer Research Fellow</h3>
      <p class="resume-card__org"><a href="https://iisc.ac.in/">Indian Institute of Science, Bengaluru</a></p>
    </div>
    <img src="./../images/iisc.png" width="64" height="64" alt="IISc">
  </div>
  <p class="resume-card__meta">May 2023 - June 2023 | Indian Academy of Sciences Summer Research Fellowship</p>
  <ul class="clean-list">
    <li>Studied droplet dynamics on heated pillared substrates using high-speed imaging.</li>
    <li>Applied OpenCV workflows including Gaussian blur, Canny detection, thresholding, and contour extraction.</li>
    <li>Modeled the heat-transfer effects of pillar geometry by treating the substrate as a fin-array system.</li>
  </ul>
</article>

## Selected Projects

<section class="stack-grid">
  <article class="project-card">
    <span class="section-tag">Applied LLM Systems</span>
    <h3>Biomedical Retrieval-Augmented Generation System</h3>
    <p class="project-card__meta">May 2026</p>
    <p>Built a biomedical RAG pipeline over PubMed abstracts using TF-IDF retrieval, recursive chunking, and LLM-based grounded generation for medical question answering.</p>
    <p>Evaluated response grounding and retrieval quality with RAGAS metrics and chunking ablation experiments, then reduced deployment overhead by replacing heavier dense retrieval components with lightweight lexical search.</p>
    <p><strong>Tech Stack:</strong> FastAPI, Docker, Python, RAGAS, Retrieval Pipelines</p>
    <div class="button-row">
      <a class="btn btn--secondary" target="_blank" href="https://github.com/vasanthbhaskara/biomedical-rag" role="button" style="text-decoration:none">Github</a>
    </div>
  </article>

  <article class="project-card">
    <span class="section-tag">LLM Fine-Tuning</span>
    <h3>LLM Style Transfer via Parameter-Efficient Fine-Tuning</h3>
    <p class="project-card__meta">February 2026</p>
    <p>Fine-tuned LiquidAI LFM2-1.2B using LoRA on 2,048 style-transfer examples while updating less than 0.05% of model parameters.</p>
    <p>Built training and evaluation pipelines in PyTorch and Hugging Face, and assessed outputs with LLM-as-a-Judge methodology using Gemini 2.5 Flash alongside negative log-likelihood based evaluation.</p>
    <p><strong>Tech Stack:</strong> PyTorch, Hugging Face, LoRA, PEFT, Python</p>
    <div class="button-row">
      <a class="btn btn--secondary" target="_blank" href="https://github.com/vasanthbhaskara/llm-fine-tuning-with-lora" role="button" style="text-decoration:none">Github</a>
    </div>
  </article>

  <article class="project-card">
    <span class="section-tag">Sequence Modeling</span>
    <h3>LSTM Based Real-time Music Generation Application</h3>
    <p class="project-card__meta">January 2026</p>
    <p>Trained a character-level LSTM on roughly 800 songs with embedding, sequence batching, and multinomial sampling with temperature control for symbolic music generation.</p>
    <p>Deployed a Streamlit inference app with configurable generation controls, pretrained weights, and real-time audio synthesis for live interaction.</p>
    <p><strong>Tech Stack:</strong> PyTorch, LSTM, Streamlit, Python</p>
    <div class="button-row">
      <a class="btn btn--primary" target="_blank" href="https://ai-music-lab.streamlit.app/" role="button" style="text-decoration:none">Live Demo</a>
      <a class="btn btn--secondary" target="_blank" href="https://github.com/vasanthbhaskara/ai-music-composer" role="button" style="text-decoration:none">Github</a>
    </div>
  </article>

  <article class="project-card">
    <span class="section-tag">Commercial Analytics</span>
    <h3>Promotion Impact Estimation using Bayesian Regression</h3>
    <p class="project-card__meta">ZS Associates | December 2025</p>
    <p>Built Bayesian regression models to estimate channel-level promotional contribution for a rapidly growing immunology brand.</p>
    <p>Delivered budget allocation insights that improved marketing ROI and overall spending efficiency.</p>
    <p><strong>Tech Stack:</strong> Python, Bayesian Statistics, Pandas, Marketing Mix Modeling</p>
  </article>
</section>

## Skills

<section class="skills-grid">
  <article class="resume-card resume-card--compact">
    <h3>Programming and Data</h3>
    <div class="chip-list">
      <span class="chip">Python</span>
      <span class="chip">SQL</span>
      <span class="chip">Databricks</span>
      <span class="chip">AWS Redshift</span>
      <span class="chip">Pandas</span>
      <span class="chip">PySpark</span>
      <span class="chip">Excel</span>
      <span class="chip">Git</span>
    </div>
  </article>
  <article class="resume-card resume-card--compact">
    <h3>Machine Learning and AI</h3>
    <div class="chip-list">
      <span class="chip">PyTorch</span>
      <span class="chip">Hugging Face</span>
      <span class="chip">LangChain</span>
      <span class="chip">FastAPI</span>
      <span class="chip">LoRA</span>
      <span class="chip">RAG</span>
      <span class="chip">Bayesian Regression</span>
      <span class="chip">Feature Engineering</span>
    </div>
  </article>
  <article class="resume-card resume-card--compact">
    <h3>Delivery and Tooling</h3>
    <div class="chip-list">
      <span class="chip">Docker</span>
      <span class="chip">Streamlit</span>
      <span class="chip">Analytics Pipelines</span>
      <span class="chip">ETL Workflows</span>
      <span class="chip">Model Evaluation</span>
      <span class="chip">Commercial Analytics</span>
    </div>
  </article>
</section>

## Licenses and Certifications

<section class="stack-grid certifications-grid">
  <article class="credential-card">
    <img src="./../images/databricks-logo.png" width="56" height="56" alt="Databricks logo">
    <h3>Databricks Certified Data Engineer Associate</h3>
    <p class="credential-card__meta">Databricks | Issued November 2025 | Expires November 2027</p>
    <p>Credential ID: 166205453 | Skills: SQL, PySpark, Spark SQL</p>
    <a class="btn btn--primary" target="_blank" href="https://credentials.databricks.com/e5dcc7f5-3a30-4c67-926a-6ec0285b5604#acc.05d2JjUw" role="button" style="text-decoration:none">Credential</a>
  </article>

  <article class="credential-card">
    <img src="./../images/deeplearning-ai-logo.jpeg" width="56" height="56" alt="DeepLearning.AI logo">
    <h3>Deep Learning Specialization Coursework</h3>
    <p class="credential-card__meta">Stanford Online / DeepLearning.AI</p>
    <p>Covered modern machine learning fundamentals across supervised learning, optimization, and neural network workflows.</p>
  </article>

  <article class="credential-card">
    <img src="./../images/deeplearning-ai-logo.jpeg" width="56" height="56" alt="DeepLearning.AI logo">
    <h3>Supervised Machine Learning: Regression and Classification</h3>
    <p class="credential-card__meta">DeepLearning.AI | Issued April 2024</p>
    <p>Skills: Machine Learning, Classification, Regression Algorithms</p>
    <a class="btn btn--primary" target="_blank" href="https://www.coursera.org/account/accomplishments/verify/5JB4LEDS2PLK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" role="button" style="text-decoration:none">Credential</a>
  </article>

  <article class="credential-card">
    <img src="./../images/hackerrank-logo.png" width="56" height="56" alt="HackerRank logo">
    <h3>Python (Basic) Certification</h3>
    <p class="credential-card__meta">HackerRank | Issued October 2023</p>
    <p>Credential ID: 32E7780D782E | Skills: Python Programming</p>
    <a class="btn btn--primary" target="_blank" href="https://www.hackerrank.com/certificates/32e7780d782e" role="button" style="text-decoration:none">Credential</a>
  </article>

  <article class="credential-card">
    <img src="./../images/hackerrank-logo.png" width="56" height="56" alt="HackerRank logo">
    <h3>SQL (Basic) Certification</h3>
    <p class="credential-card__meta">HackerRank | Issued October 2023</p>
    <p>Credential ID: D45E82C5C8B8 | Skills: SQL</p>
    <a class="btn btn--primary" target="_blank" href="https://www.hackerrank.com/certificates/d45e82c5c8b8" role="button" style="text-decoration:none">Credential</a>
  </article>
</section>

## Publications

<article class="resume-card">
  <ul class="clean-list">
    <li>Vasanth B S, Vysakh P, M Thashreef, A P Sudheer. “Design, Fabrication and Control of a Multi-purpose Marine Robot”, NIT Calicut</li>
  </ul>
</article>

<small style="color: #7f8c8d; text-align: center; display: block; margin-top: 40px;">
  <i>Last updated: May 15, 2026</i>
</small>
