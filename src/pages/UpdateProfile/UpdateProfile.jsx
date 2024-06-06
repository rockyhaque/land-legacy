import { useContext, useEffect, useState } from "react";
import { AuthContext } from './../../providers/AuthProvider';
import { getAuth, updateProfile } from "firebase/auth";
import moment from 'moment';

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [lastLoginAt, setLastLoginAt] = useState('');

  // Fetch update count on component mount
  useEffect(() => {
    // Set default name and photo URL when the component mounts
    setDisplayName(user.displayName);
    setPhotoURL(user.photoURL);

    // Format creation and last login timestamps using Moment.js
    if (user.metadata) {
        setCreatedAt(moment(user.metadata.creationTime).format('LLL'));
        setLastLoginAt(moment(user.metadata.lastSignInTime).format('LLL'));
    } else {
        setCreatedAt('Unknown');
        setLastLoginAt('Unknown');
    }
}, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      try {
        await updateProfile(currentUser, {
          displayName,
          photoURL
        });

        setSuccess('Profile updated successfully!');
        
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 mr-4 rounded-full overflow-hidden">
          <img src={user?.photoURL} alt={user?.displayName} className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">{user?.displayName}</h1>
          <p className="text-gray-600">{user?.email}</p>
          <p className="text-gray-600">Provider: {user?.providerData?.[0]?.providerId}</p>
          <div className="text-sm text-gray-600">
            <p>Created At: {createdAt}</p>
            <p>Last Login At: {lastLoginAt}</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleUpdateProfile}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Save Changes
        </button>
      </form>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {success && <div className="text-green-500 mt-4">{success}</div>}
    </div>
  );
};

export default UpdateProfile;
