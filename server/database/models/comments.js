const commentModel = `
  DROP TABLE IF EXISTS dComments CASCADE;
  CREATE TABLE dComments (
      commentId serial PRIMARY KEY,
      userId INT NOT NULL,
      answerId INT NOT NULL,
      message TEXT NOT NULL,
      createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      foreign key(userId) REFERENCES aUsers(userId),
      foreign key(answerId) REFERENCES cAnswers(answerId)
  );
`;

const commentDb = `${commentModel}`;

export default commentDb;