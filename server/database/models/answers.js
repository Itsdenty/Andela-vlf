const answerModel = `
  DROP TABLE IF EXISTS cAnswers CASCADE;
  CREATE TABLE cAnswers (
      answerId serial PRIMARY KEY,
      userId INT NOT NULL,
      questionId INT NOT NULL,
      message TEXT NOT NULL,
      createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      foreign key(userId) REFERENCES aUsers(userId),
      foreign key(questionId) REFERENCES bQuestions(questionId)
  );
`;

const answerDb = `${answerModel}`;

export default answerDb;