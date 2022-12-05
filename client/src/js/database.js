import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => { console.error('putDb not implemented');

const dbText = await openDB('text', 1);

const txt = dbText.transaction("text", "readwrite");

const store = txt.objectStore('text')

const request = store.put({text: content});

const result = await request; console.log('data saved', results);
}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {console.log('GET all database');
const dbT = await openDB("text", 1);

const txt = dbT.transaction("text", "readonly");

const store = txt.objectStore("text");

const request = store.getAll();

const results = await request;
console.log("results.value", results)
}
initdb();
