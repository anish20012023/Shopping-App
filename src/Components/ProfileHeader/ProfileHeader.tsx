import { Avatar, Box, Link, Paper, Typography } from "@mui/material";
import { useStyles } from "./ProfileHeader.styles";

function ProfileHeader() {
  const classes = useStyles();
  return (
    <Box className={classes.headerPaper}>
      <Paper className={classes.about}>
        <Avatar src="images/user.jpg" />
        <Box className={classes.about_details}>
          <Typography>Work in the India</Typography>
          <Typography variant="body2">
            Hi! I'm Jeremy Akeze from Doghouse IT Recruitment and I'm looking for skilled Software Engineers like you.
            If you wish to move abroad,
            <span>
              {" "}
              <Link href="https://www.linkedin.com/in/anish-chaurasia-985171227/">follow me on Linkedin</Link>
            </span>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default ProfileHeader;
