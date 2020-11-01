import Dexie from "dexie";
function createSchema(props: string) {
  return `++code,${props},createdAt,updatedAt`;
}

const db = new Dexie("RestauratManager");

db.version(1).stores({
  category: createSchema("name,description"),
});

export default db