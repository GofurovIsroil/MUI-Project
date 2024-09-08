"use client";

import { Dialog, Drawer, Modal, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Fragment, useEffect, useState } from "react";
import { NotesCard } from "../NotesCard/NotesCard";
export interface INotesPageFormData {
  title: string;
  details: string;
  category: string;
  id: number;
}

interface ModalFormProps {
  open: boolean;
  handleClose: () => void;
  note: INotesPageFormData;
}

const ModalForm: React.FC<ModalFormProps> = ({
  handleClose,
  note,
  open,
}: ModalFormProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Typography variant="h6" color="textPrimary" noWrap>
        {note.title}
      </Typography>
      <Typography>{note.details}</Typography>
    </Dialog>
  );
};

export const NotesPageForm = () => {
  const [notes, setNotes] = useState<INotesPageFormData[]>([]);
  //   const [open, setOpen] = useState<boolean>(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const deleteClickHandler = async (id: number) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => id != note.id);
    setNotes(newNotes);
  };

  console.log(notes);

  return (
    <div>
      <Grid container spacing={2}>
        {notes.map((note) => {
          return (
            <Grid
              key={note.id}
              size={{
                lg: 3,
                sm: 6,
                xs: 12,
              }}
            >
              <NotesCard
                note={note}
                deleteClickHandler={() => deleteClickHandler(note.id)}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
