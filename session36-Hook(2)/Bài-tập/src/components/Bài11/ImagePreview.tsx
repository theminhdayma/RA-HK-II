import React, { useState, useEffect } from 'react';

export default function ImagePreview() {
  const [imageSrc, setImageSrc] = useState('');

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // Hàm này sẽ được gọi khi imageSrc thay đổi
    console.log('Image source updated:', imageSrc);
  }, [imageSrc]);

  return (
    <div>
      <h3>Preview hình ảnh</h3>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageSrc && (
        <div>
          <h4>Hình ảnh đã chọn:</h4>
          <img src={imageSrc} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        </div>
      )}
    </div>
  );
}
