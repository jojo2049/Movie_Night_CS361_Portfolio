import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Details.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "30%",
  height: "60%",
  bgcolor: '#BB4430',
  borderRadius: 15,
  border: '4px solid #EEF0EB',
  boxShadow: 24,
  p: 4
};

export default function Details({children, id, title, overview, release, poster_large}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const poster_large_size = "https://image.tmdb.org/t/p/w500"

  return (
    <div>
      <div className="box" onClick={handleOpen}>{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <img className="poster_large" src={`${poster_large_size}/${poster_large}`} alt={title}/>
            <div className="box_title">
            {title}
            </div>
            <div className="overview">
              {overview}
            </div>
            <div className="release">
            Released on: {release}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}