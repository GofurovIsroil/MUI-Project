"use client";

import {
  Button,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import useStyles from "@/hooks/useStyles/useStyles";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export const MainPageForm = () => {
  const classes = useStyles();
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [detailsTitle, setDetailsTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [isNodeTitleValid, setIsNodeTitleValid] = useState<boolean | null>(
    null
  );
  const [isDetailsTitleValid, setIsDetailsTitleValid] = useState<
    boolean | null
  >(null);

  const router = useRouter();

  const isFormValid = () => {
    setNoteTitle("");
    setDetailsTitle("");
    if (noteTitle && detailsTitle) {
      setIsNodeTitleValid(true);
      setIsDetailsTitleValid(true);
    } else if (noteTitle !== "" || detailsTitle !== "") {
      setIsNodeTitleValid(false);
      setIsDetailsTitleValid(false);
    } else {
      setIsNodeTitleValid(false);
      setIsDetailsTitleValid(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isFormValid();
    if (noteTitle && detailsTitle) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "aplication/json" },
        body: JSON.stringify({
          title: noteTitle,
          details: detailsTitle,
          category,
        }),
      }).then(() => {
        router.replace("/notes");
      });
    } else {
      return false;
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          value={noteTitle}
          onChange={(e) => {
            if (e.target.value) {
              e.target.value = e.target.value.replace(
                e.target.value[0],
                e.target.value[0].toUpperCase()
              );
              if (e.target.value[0] === " ") {
                e.target.value = e.target.value.replace(e.target.value[0], "");
              }
            }
            setNoteTitle(e.target.value);
          }}
          label="Note"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={isNodeTitleValid === false}
        />
        <TextField
          className={classes.input}
          value={detailsTitle}
          onChange={(e) => {
            if (e.target.value) {
              e.target.value = e.target.value.replace(
                e.target.value[0],
                e.target.value[0].toUpperCase()
              );
              if (e.target.value[0] === " ") {
                e.target.value = e.target.value.replace(e.target.value[0], "");
              }
            }
            setDetailsTitle(e.target.value);
          }}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={isDetailsTitleValid === false}
        />

        <RadioGroup
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabel
            value="Reminders"
            control={<Radio color="secondary" />}
            label="reminders"
          />
          <FormControlLabel
            value="Work"
            control={<Radio color="secondary" />}
            label="work"
          />
          <FormControlLabel
            value="Todos"
            control={<Radio color="secondary" />}
            label="todos"
          />
        </RadioGroup>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </Container>
  );
};
