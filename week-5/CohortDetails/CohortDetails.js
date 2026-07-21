import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails() {
  const cohorts = [
    { name: "DN 5.0 Java Full Stack", startDate: "01-May-2026", endDate: "30-Jun-2026", status: "ongoing" },
    { name: "DN 4.0 Python Full Stack", startDate: "01-Jan-2026", endDate: "28-Feb-2026", status: "completed" },
    { name: "DN 5.0 MERN Stack", startDate: "15-Apr-2026", endDate: "15-Jun-2026", status: "ongoing" },
    { name: "DN 3.0 Data Engineering", startDate: "01-Nov-2025", endDate: "31-Dec-2025", status: "completed" }
  ];

  return (
    <div>
      <h2>Cohort Dashboard</h2>
      {cohorts.map((cohort, index) => (
        <div key={index} className={styles.box}>
          <h3 style={{ color: cohort.status === 'ongoing' ? 'green' : 'blue' }}>
            {cohort.name}
          </h3>
          <dl>
            <dt>Start Date</dt>
            <dd>{cohort.startDate}</dd>
            <dt>End Date</dt>
            <dd>{cohort.endDate}</dd>
            <dt>Status</dt>
            <dd>{cohort.status}</dd>
          </dl>
        </div>
      ))}
    </div>
  );
}

export default CohortDetails;
