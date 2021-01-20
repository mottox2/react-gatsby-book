exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const team = {
    number: 2,
    name: "開発チーム",
    description: "開発を担うチームです。",
  };
  const nodeId = createNodeId(`team-${team.number}`);
  createNode({
    ...team,
    id: nodeId,
    parent: null,
    children: [],
    internal: {
      type: `Team`,
      content: JSON.stringify(team),
      contentDigest: createContentDigest(team),
    },
  });

  const persons = [
    {
      number: 123,
      name: "Taro Tanaka",
      age: 20,
      active: true,
      team___NODE: nodeId,
    },
    {
      number: 256,
      name: "Nao Toyama",
      age: 28,
      active: true,
      team___NODE: nodeId,
    },
  ];

  persons.map((person) => {
    console.log(person);
    createNode({
      ...person,
      id: createNodeId(`my-node-${person.number}`),
      parent: null,
      children: [],
      internal: {
        type: `Person`,
        content: JSON.stringify(person),
        contentDigest: createContentDigest(person),
      },
    });
  });
};
