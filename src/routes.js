const { addNoteHandler, getAllNotesHandler, getNoteIdHandler, editNoteByHandler, deleteNoteById } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteById,
  },
];

module.exports = routes;
