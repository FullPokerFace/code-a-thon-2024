import { Typography, Box } from "@mui/material";

const EmailDisclaimer = () => {
  return (
    <Box sx={{ mt: 2, p: 2, bgcolor: "background.paper", borderRadius: "4px" }}>
      <Typography variant="caption">
        This email is intended solely for the use of the addressee and may
        contain confidential information of Express Scripts, Inc. If you are not
        the intended recipient, you are hereby notified that any use,
        dissemination, or copying of this email is strictly prohibited. If you
        have received this email in error, please notify the sender immediately
        and delete it from your system.
      </Typography>
    </Box>
  );
};

export default EmailDisclaimer;
