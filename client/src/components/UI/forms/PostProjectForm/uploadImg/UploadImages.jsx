import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

// Material UI
import { Box, Button } from '@mui/material';
import DownloadingTwoToneIcon from '@mui/icons-material/DownloadingTwoTone';
// CSS
import './uploadImageStyle.scss';

function UploadImages() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [img_url, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: 'none' }}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />

      {img_url && selectedImage && (
        <Box textAlign="center">
          <img
            src={img_url}
            alt={selectedImage.name}
            className="preview-image"
          />
        </Box>
      )}
      <label htmlFor="select-image">
        <Button
          variant="contained"
          color="primary"
          component="span"
          endIcon={<DownloadingTwoToneIcon />}
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}
        >
          Télécharger votre couverture
        </Button>
      </label>
    </>
  );
}

UploadImages.propTypes = {};

UploadImages.defaultProps = {};

export default React.memo(UploadImages);
