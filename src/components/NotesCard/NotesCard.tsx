import { DeleteOutlined } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { INotesPageFormData } from "../NotesPageForm/NotesPageForm";
import useStyles from "@/hooks/useStyles/useStyles";

interface NotesCardProps {
  note: INotesPageFormData;
  deleteClickHandler: () => void;
}

export const NotesCard: React.FC<NotesCardProps> = ({
  note,
  deleteClickHandler,
}: NotesCardProps) => {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardHeader
          action={
            <IconButton onClick={deleteClickHandler}>
              <DeleteOutlined />
            </IconButton>
          }
          title={
            <Typography fontSize="1.5rem" className={classes.breakWork}>
              {note.title}
            </Typography>
          }
          subheader={
            <Typography className={classes.breakWork}>
              {note.category}
            </Typography>
          }
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.breakWork}
          >
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
