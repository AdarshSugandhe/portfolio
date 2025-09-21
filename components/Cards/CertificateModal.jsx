import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Modal, Backdrop, Fade } from "@mui/material";
import Image from "next/image";
import { CgClose } from "react-icons/cg";

const CertificateModal = ({ imgUrl }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        variant="contained"
        onClick={handleOpen}
        className="text-xs text-center xl:text-right text-accent pt-3"
      >
        VIEW CERTIFICATE
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: {
              backdropFilter: "blur(2px)",
              backgroundColor: "rgba(0,0,0,0.5)",
            },
          },
        }}
        aria-labelledby="certificate-title"
        aria-describedby="certificate-description"
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: 600, md: 700 },
              bgcolor: "#121212",
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              outline: "none",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
            >
              <CgClose />
            </IconButton>
            <Typography
              id="certificate-title"
              variant="h6"
              component="h2"
              sx={{ color: "white", mb: 2 }}
            >
              CERTIFICATE
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image
                src={imgUrl}
                alt="Certificate"
                width={650}
                height={400}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CertificateModal;
