---
permalink: /
title: "Bio"
excerpt: ""
author_profile: true
classes: wide
redirect_from: 
  - /about/
  - /about.html
header:
  preview_card_image: profile_pic.jpg
---

<style>
:root {
  --primary-color: #0066cc;
  --secondary-color: #ff6b6b;
  --accent-color: #4ecdc4;
}

/* Default light mode */
html, body, p, li, span, div, td, a, h1, h2, h3, h4, h5, h6, strong, code {
  color: #1a1a1a !important;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  html, body, p, li, span, div, td, a, h1, h2, h3, h4, h5, h6, strong, code {
    color: #f0f0f0 !important;
  }
}

/* Enhanced Typography */
h1, h2, h3 {
  background: linear-gradient(135deg, #0066cc, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  letter-spacing: -0.5px;
}

/* Card Styling */
.experience-card, .project-card, .cert-card, .skill-category {
  border-radius: 12px;
  padding: 24px;
  margin: 16px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  background: #f8f9fa;
}

@media (prefers-color-scheme: dark) {
  .experience-card, .project-card, .cert-card, .skill-category {
    background: #2d2d2d;
    border-color: #404040;
  }
}

.experience-card:hover, .project-card:hover, .cert-card:hover, .skill-category:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 102, 204, 0.15);
  border-color: #0066cc;
}

/* Skill Badge Styling */
.skill-badge {
  display: inline-block;
  background: linear-gradient(135deg, #0066cc, #4ecdc4);
  color: #ffffff !important;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin: 4px 8px 4px 0;
  transition: all 0.3s ease;
}

.skill-badge:hover {
  transform: scale(1.08);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
}

/* Timeline Styling */
.timeline {
  position: relative;
  padding-left: 20px;
  border-left: 3px solid #0066cc;
  margin-left: 10px;
}

.timeline-item {
  margin-bottom: 24px;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -27px;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #4ecdc4;
  border: 3px solid #f8f9fa;
  transition: all 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  .timeline-item::before {
    border-color: #2d2d2d;
  }
}

.timeline-item:hover::before {
  width: 16px;
  height: 16px;
  left: -29px;
  background: #0066cc;
}

/* Logo Container */
.logo-container {
  transition: transform 0.3s ease;
  display: inline-block;
}

.logo-container:hover {
  transform: scale(1.1) rotate(2deg);
}

/* Section Divider */
.section-divider {
  margin: 48px 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #0066cc, #4ecdc4, transparent);
  border-radius: 2px;
}

/* Contact Badge */
.contact-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.1), rgba(78, 205, 196, 0.1));
  border: 1px solid #0066cc;
  border-radius: 8px;
  padding: 12px 16px;
  margin: 16px 0;
  transition: all 0.3s ease;
  color: #1a1a1a !important;
}

@media (prefers-color-scheme: dark) {
  .contact-badge {
    color: #f0f0f0 !important;
  }
}

.contact-badge:hover {
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.15), rgba(78, 205, 196, 0.15));
  transform: translateX(4px);
}

/* List Enhancement */
ul li, ol li {
  margin: 10px 0;
  transition: all 0.3s ease;
  color: #1a1a1a !important;
}

@media (prefers-color-scheme: dark) {
  ul li, ol li {
    color: #f0f0f0 !important;
  }
}

ul li::marker {
  color: #0066cc;
  font-weight: bold;
}

/* Highlight Animation */
@keyframes highlight-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

strong {
  background: linear-gradient(120deg, rgba(0, 102, 204, 0.1), rgba(78, 205, 196, 0.1));
  padding: 2px 6px;
  border-radius: 4px;
  animation: highlight-pulse 2s ease-in-out infinite;
  color: #1a1a1a !important;
}

@media (prefers-color-scheme: dark) {
  strong {
    color: #f0f0f0 !important;
  }
}

/* Table Enhancement */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  border-radius: 8px;
  overflow: hidden;
}

table td {
  padding: 16px;
  border: 1px solid #ddd;
  transition: all 0.3s ease;
  background: #f8f9fa;
  color: #1a1a1a !important;
}

@media (prefers-color-scheme: dark) {
  table td {
    background: #2d2d2d;
    border-color: #404040;
    color: #f0f0f0 !important;
  }
}

table tr:hover td {
  background: linear-gradient(90deg, rgba(0, 102, 204, 0.05), rgba(78, 205, 196, 0.05));
}

/* Responsive Design */
@media (max-width: 768px) {
  .experience-card, .project-card, .cert-card {
    padding: 16px;
  }
  
  h1, h2, h3 {
    font-size: 1.3em;
  }
}

/* Grid Layout */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}
</style>

# ✨ Vasanth S. Bhaskara

**Data Scientist @ ZS** | **Databricks Certified Data Engineer** | **Dept Rank 3 – NIT Calicut Alumni** | **IISc Summer Research Fellow** | **160+ LeetCode Problems Solved**

---

## 🎯 Professional Summary

I bring a strong foundation in **Mathematics, Computational Skills, Engineering, and Business Acumen**, developed during my undergraduate studies at NIT Calicut and refined through professional experience at leading organizations.

Currently working at **ZS**, a premier global consulting firm specializing in data-driven solutions for the pharmaceutical and healthcare industry. I solve high-impact business problems in the **Digital Customer Experience space**, leveraging **Marketing Mix Modeling** with statistical analysis, advanced feature engineering (ad stocking horizons, log transformations), and regression modeling to help top pharma and life sciences clients make strategic, data-informed decisions.

Previously, at **HPCL**—one of India's largest Oil Marketing Companies—I worked as a **Condition Monitoring Engineer** at the Visakh Refinery, where I implemented AI-driven predictive maintenance tools to reduce downtime, built dashboards for maintenance compliance tracking, and managed procurement activities across the oil business value chain.

I recently passed the **Databricks Certified Data Engineer Associate** exam and have developed deep expertise in Apache Spark, Delta Lake, and distributed computing architectures for scalable data pipelines.

<div class="contact-badge">
  <i class="fas fa-envelope"></i>
  <code>vasanthsbhaskara [at] gmail [dot] com</code>
</div>

<div class="section-divider"></div>

## 🚀 About Databricks Certification

I've been diving into Databricks over the past few months, and it's been absolutely fascinating:

<div class="timeline">
  <div class="timeline-item">
    <strong>📊 Big Data Architecture</strong>: Distributed computing enables us to build truly scalable systems across cloud platforms
  </div>
  <div class="timeline-item">
    <strong>⚡ Apache Spark Evolution</strong>: Moving beyond traditional Hadoop MapReduce with much faster, in-memory computation models
  </div>
  <div class="timeline-item">
    <strong>🔄 Modern Data Pipelines</strong>: Spark's ecosystem (Spark Streaming, Structured Streaming, Kafka integrations) shows how data infrastructure has evolved
  </div>
  <div class="timeline-item">
    <strong>🏗️ Spark Architecture</strong>: Driver–worker architecture where the driver coordinates job execution, with lazy execution building optimized Directed Acyclic Graphs (DAGs)
  </div>
  <div class="timeline-item">
    <strong>💾 Delta Lake Storage</strong>: ACID transactions, schema enforcement, time travel, and versioning combining Parquet files with transaction logs
  </div>
  <div class="timeline-item">
    <strong>⚙️ Performance Optimization</strong>: OPTIMIZE, ZORDER BY, PARTITION BY, and Auto Liquid Clustering for query acceleration
  </div>
  <div class="timeline-item">
    <strong>💰 Cost Optimization</strong>: Comparing job clusters, all-purpose compute, serverless options, and spot instances
  </div>
  <div class="timeline-item">
    <strong>🔗 End-to-End Pipelines</strong>: Built ETL pipelines using PySpark following the Medallion Architecture (Bronze → Silver → Gold) with Delta Live Tables
  </div>
</div>

> Databricks truly brings together the best of data engineering, scalability, and reliability in one unified platform.

<div class="section-divider"></div>

## 💼 Experience

### 📍 Data Analyst @ ZS
**Feb 2025 - Present** | Pune, Maharashtra, India

<div class="experience-card">

| <div class="logo-container"><img src="./../images/zs-logo.svg" width="70" height="70" alt="ZS Logo"></div> | **Role:** Data Scientist, Digital Customer Experience |
|---|---|

**Key Achievements:**
- <span class="skill-badge">📊 Marketing Mix Modeling</span> Conducted comprehensive MMM for a leading global pharmaceutical portfolio, supporting omnichannel strategy optimization across oncology, immunology, and neuroscience products
- <span class="skill-badge">🔧 Feature Engineering</span> Engineered sophisticated features (adstocking, normalization, log transforms) and built linear/Bayesian regression models in Python to maximize predictive accuracy
- <span class="skill-badge">🔍 Data Processing</span> Performed large-scale data preprocessing and exploratory data analysis using Pandas, including cleaning, transformation, and aggregation-based summarization
- <span class="skill-badge">📈 Patient Analytics</span> Analyzed Patient Level Data (PLD) to identify key drivers of referrals, accounting for carryover effects and salesforce activity patterns
- <span class="skill-badge">🏆 Competition Winner</span> Won 1st place in ZS's internal case competition by applying t-SNE and K-Means clustering to segment Healthcare Professionals (HCPs) and design targeted engagement strategies

</div>

---

### 🔧 Condition Monitoring Engineer @ Hindustan Petroleum Corporation Limited (HPCL)
**Aug 2024 - Jan 2025** | Visakhapatnam, Andhra Pradesh, India

<div class="experience-card">

| <div class="logo-container"><img src="./../images/hpcl-logo.png" width="70" height="70" alt="HPCL Logo"></div> | **Role:** Predictive Maintenance & Planning |
|---|---|

**Condition Monitoring Activities:**
- <span class="skill-badge">📡 Equipment Monitoring</span> Conducted vibration monitoring of rotary equipment using Emerson CSI 2140 Analyzer
- <span class="skill-badge">🛠️ Predictive Maintenance</span> Proficient in predictive maintenance software: Honeywell Forge Asset Performance Management, Bently Nevada System 1, Howden Uptime, and AMS Vibration Monitoring
- <span class="skill-badge">⚙️ Hands-On</span> Hands-on experience monitoring pumps, centrifugal & reciprocating compressors, blowers, Gas Turbines, Air Fin Cooler Fans, and Cooling Tower fans
- <span class="skill-badge">📋 SAP Management</span> Utilized SAP MM and PM modules for work permits and led safety compliance for 20+ data collectors
- <span class="skill-badge">📢 Leadership</span> Delivered external presentations on predictive maintenance strategies, showcasing in-house implementation success stories

**Planning & Optimization Activities:**
- <span class="skill-badge">🎯 Procurement</span> Spearheaded firewall procurement via competitive tendering, managing six vendors with annual turnovers exceeding ₹4 billion
- <span class="skill-badge">⚡ Tribology</span> Designed greasing schedules for 2,300+ machines using tribology principles, enhancing preventive maintenance strategies and reducing unplanned downtime
- <span class="skill-badge">📊 Dashboard</span> Built real-time greasing compliance dashboard in Excel, improving adherence to maintenance schedules and minimizing equipment failure rates

</div>

## Education
<table>
  <tbody>
    <tr>
      <td rowspan="3" style="text-align: center; vertical-align: top;"><img src="./../images/iitg.png" width="70" height="70"></td>
      <td style="text-align: left; vertical-align: top;"><strong>B.Tech. in Mechanical Engineering</strong></td>
      <td></td>
    </tr>
    <tr>
      <td style="text-align: left; vertical-align: top;"><strong><a href="https://www.nitc.ac.in/">National Institute of Technology (NIT), Calicut</a></strong></td>
      <td>&nbsp;</td>
      <td style="text-align: right; vertical-align: top;">Dec 2020 - May 2024</td>
    </tr>
    <tr>
      <td style="text-align: left; vertical-align: top;">Cumulative Grade Point Average: 9.25 / 10.0 | <strong>Department Rank: 3 out of 210</strong></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

- **Project Title**: Design, Fabrication, and Control of a Multipurpose Marine Robot
- **Project Advisor**: [Dr. Sudheer A P](https://nitc.ac.in/department/mechanical-engineering/faculty-and-staff/faculty/8eb95fa4-0e19-4246-aa46-75095a3ec8d8), Associate Professor, National Institute of Technology (NIT) Calicut
- **Funding**: Secured a Grant of Rs. 75,000 from the Centre for Innovation, Entrepreneurship and Incubation (CIEI) at NIT Calicut
  - Led a team of three students as Project Lead, providing direction to meet project milestones and strict deadlines
  - Managed fund allocations and budgeting throughout the project lifecycle
  - Executed complete CAD design, CFD analysis, and fabrication strategies
  - Presented project findings and addressed evaluation committee questions

---

## Research Experience
<table>
  <tbody>
    <tr>
      <td rowspan="3" style="text-align: center; vertical-align: top;"><img src="./../images/iisc.png" width="70" height="70"></td>
      <td style="text-align: left; vertical-align: top;"><strong>Indian Academy of Sciences (IAS), Summer Research Fellow</strong></td>
      <td></td>
    </tr>
    <tr>
      <td style="text-align: left; vertical-align: top;"><strong><a href="https://iisc.ac.in">Indian Institute of Science (IISc), Bengaluru</a></strong></td>
      <td>&nbsp;</td>
      <td style="text-align: right; vertical-align: top;">May 2023 - June 2023</td>
    </tr>
    <tr>
      <td style="text-align: left; vertical-align: top;">Droplet Dynamics on Heated Substrates, Guide: <a href="https://mecheng.iisc.ac.in/people/susmita-dash/" target="_blank">Dr. Susmita Dash</a></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

- Conducted experiments involving water droplets on a hot pillared surface and captured dynamics using high-speed cameras
- Conducted image processing in Python using OpenCV on the clip of a Leidenfrost droplet
- Gained proficiency in the principles of image processing algorithms: Gaussian Blur, Canny Detector, Thresholding, and Contouring
- Quantified the effect of an increase in heat transfer from the pillars to the droplet with pillar height, by modelling the system as fins


## Achievements & Academic Honors

<div class="timeline">
  <div class="timeline-item">
    🏆 <strong>Recipient of the prestigious IASc-INSA-NASI Summer Research Fellowship (Mar 2023)</strong>: Selected for the highly competitive Indian Academy of Sciences Fellowship, one of the most prestigious fellowships in India, and worked under Dr. Susmita Dash at IISc Bengaluru
  </div>
  <div class="timeline-item">
    🎓 <strong>Department Rank 3 out of 210</strong>: Secured 9.25 / 10.0 CGPA in Mechanical Engineering, with 83% of courses graded at 9.0 or above
  </div>
  <div class="timeline-item">
    📜 <strong>Selected for Summer Fellowship programs at IIT Madras and IIT Kanpur (May 2023)</strong>
  </div>
  <div class="timeline-item">
    ✨ <strong>Perfect Grade (10/10) in all Mathematics Courses</strong>: Only student in department awarded this distinction
  </div>
  <div class="timeline-item">
    🥇 <strong>Department Rank 1 in 4th Semester (June 2022)</strong>: Achieved SGPA of 9.58 / 10.0 among 210 students
  </div>
</div>

<div class="section-divider"></div>

## 📚 Academic Projects

<div class="project-card">

### 🥉 Top 3 teams in Kaggle Insurance Claim Challenge (Dec 2023)
- <span class="skill-badge">🤖 XGBoost</span> Engineered features and built XGBoost models achieving 73% accuracy on claim predictions
- <span class="skill-badge">🔧 Feature Engineering</span> Applied data preprocessing and feature engineering techniques

</div>

<div class="project-card">

### 📊 Monté Carlo Simulation for Fuel Cell Efficiency (April 2023)
- <span class="skill-badge">🐍 Python</span> Developed probabilistic simulation in Python to estimate real fuel cell efficiency under variable distributions

</div>

<div class="project-card">

### 📦 Transportation Logistics Optimization (March 2023)
- <span class="skill-badge">📈 Linear Programming</span> Applied linear programming to warehouse allocation problem, achieving cost-effective distribution across six hostels

</div>

<div class="section-divider"></div>

## 📖 Relevant Coursework

### ⭐ Courses with Perfect Grade
<span class="skill-badge">Computer Programming</span> <span class="skill-badge">Machine Learning for Data Science and Analytics</span> <span class="skill-badge">Introduction to Robotics</span>

### 🌐 Online Courses
<span class="skill-badge">Machine Learning (Andrew Ng - Coursera)</span> <span class="skill-badge">CS50: Introduction to Computer Science (edX)</span>

<div class="section-divider"></div>

## 🏆 Licenses & Certifications

<div class="cert-card">

### 🎖️ Databricks Certified Data Engineer Associate
| <div class="logo-container"><img src="./../images/databricks-logo.png" width="70" height="70" alt="Databricks"></div> | **Databricks** |
|---|---|
| **Issued:** November 2025 | **Expires:** November 2027 |
| **Credential ID:** 166205453 | **Skills:** <span class="skill-badge">SQL</span> <span class="skill-badge">PySpark</span> <span class="skill-badge">Spark SQL</span> |

</div>

<div class="cert-card">

### 🧠 Advanced Learning Algorithms
| <div class="logo-container"><img src="./../images/deeplearning-ai-logo.png" width="70" height="70" alt="DeepLearning.AI"></div> | **DeepLearning.AI** |
|---|---|
| **Issued:** July 2025 | **Credential ID:** AS6WZ79ABLIF |
| **Skills:** <span class="skill-badge">Deep Learning</span> <span class="skill-badge">Neural Networks</span> <span class="skill-badge">TensorFlow</span> <span class="skill-badge">XGBoost</span> |

</div>

<div class="cert-card">

### 📊 Supervised Machine Learning: Regression and Classification
| <div class="logo-container"><img src="./../images/deeplearning-ai-logo.png" width="70" height="70" alt="DeepLearning.AI"></div> | **DeepLearning.AI** |
|---|---|
| **Issued:** April 2024 | **Skills:** <span class="skill-badge">Machine Learning</span> <span class="skill-badge">Classification</span> |

</div>

<div class="cert-card">

### 🐍 Python (Basic) Certification
| <div class="logo-container"><img src="./../images/hackerrank-logo.png" width="70" height="70" alt="HackerRank"></div> | **HackerRank** |
|---|---|
| **Issued:** October 2023 | **Credential ID:** 32E7780D782E |
| **Skills:** <span class="skill-badge">Python</span> |

</div>

<div class="cert-card">

### 🗄️ SQL (Basic) Certification
| <div class="logo-container"><img src="./../images/hackerrank-logo.png" width="70" height="70" alt="HackerRank"></div> | **HackerRank** |
|---|---|
| **Issued:** October 2023 | **Credential ID:** D45E82C5C8B8 |
| **Skills:** <span class="skill-badge">SQL</span> |

</div>

<div class="section-divider"></div>

## 💻 Skills

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">

<div class="skill-category">

### 🐍 **Languages**
<span class="skill-badge">Python</span> <span class="skill-badge">C/C++</span> <span class="skill-badge">SQL</span> <span class="skill-badge">JavaScript</span>

</div>

<div class="skill-category">

### 📚 **Python Libraries**
<span class="skill-badge">NumPy</span> <span class="skill-badge">Pandas</span> <span class="skill-badge">Scikit-learn</span> <span class="skill-badge">OpenCV</span> <span class="skill-badge">Matplotlib</span> <span class="skill-badge">TensorFlow</span>

</div>

<div class="skill-category">

### 🔧 **Data Structures & Algorithms**
<span class="skill-badge">Advanced DSA</span> <span class="skill-badge">160+ LeetCode</span> <span class="skill-badge">Optimization</span> <span class="skill-badge">Complexity Analysis</span>

</div>

<div class="skill-category">

### ⚡ **Big Data & Cloud**
<span class="skill-badge">Apache Spark</span> <span class="skill-badge">PySpark</span> <span class="skill-badge">Delta Lake</span> <span class="skill-badge">Databricks</span> <span class="skill-badge">Distributed Computing</span>

</div>

<div class="skill-category">

### 🤖 **Machine Learning**
<span class="skill-badge">Supervised Learning</span> <span class="skill-badge">Regression</span> <span class="skill-badge">Classification</span> <span class="skill-badge">XGBoost</span> <span class="skill-badge">Deep Learning</span> <span class="skill-badge">Neural Networks</span>

</div>

<div class="skill-category">

### 📊 **Business Analytics**
<span class="skill-badge">Marketing Mix Modeling</span> <span class="skill-badge">Feature Engineering</span> <span class="skill-badge">Statistical Analysis</span> <span class="skill-badge">Data Visualization</span> <span class="skill-badge">EDA</span>

</div>

<div class="skill-category">

### 🛠️ **Tools & IDEs**
<span class="skill-badge">VS Code</span> <span class="skill-badge">Jupyter Notebook</span> <span class="skill-badge">Git/GitHub</span> <span class="skill-badge">Excel</span> <span class="skill-badge">SAP (MM/PM)</span>

</div>

<div class="skill-category">

### 🏗️ **Infrastructure & DevOps**
<span class="skill-badge">ETL Pipelines</span> <span class="skill-badge">Delta Live Tables</span> <span class="skill-badge">Medallion Architecture</span> <span class="skill-badge">Dashboard Development</span>

</div>

</div>

---

<footer style="text-align: center; margin-top: 60px; padding-top: 30px; border-top: 2px solid var(--primary-color); opacity: 0.8;">
  <p>Last Updated: February 2026</p>
  <p>Built with ❤️ | Showcasing technical skills through beautiful, interactive design</p>
</footer>