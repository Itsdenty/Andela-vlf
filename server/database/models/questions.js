const questionModel = `
  DROP TABLE IF EXISTS bQuestions CASCADE;
  CREATE TABLE bQuestions (
      questionId serial PRIMARY KEY,
      userId INT NOT NULL,
      title VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      foreign key(userId) REFERENCES aUsers(userId)
  );
`;

const questionDb = `${questionModel}`;

export default questionDb;