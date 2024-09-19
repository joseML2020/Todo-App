import PropTypes from 'prop-types';
import { Button, Card, CardContent, Typography, Avatar } from '@mui/material';

const UserProfileCard = ({ email, onLogout }) => {
const avatarUrl = `${import.meta.env.VITE_AVATAR_API_BASE_URL}${email}.svg`;

return (
    <Card className="w-full max-w-sm mx-auto my-4">
      <CardContent className="flex items-center">
        <Avatar
          alt="User Avatar"
          src={avatarUrl}
          sx={{ width: 56, height: 56, marginRight: 2 }}
        />
        <div>
          <Typography variant="h6">{email}</Typography>
          <Button
            onClick={onLogout}
            variant="contained"
            color="secondary"
            sx={{ marginTop: 2 }}
          >
            Logout
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

UserProfileCard.propTypes = {
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default UserProfileCard;
