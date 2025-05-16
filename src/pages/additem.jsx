import React, { useRef, useState } from 'react'
import { Avatar, Box, Container, Paper, TextField, Typography, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
const Additem = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setFileName(file.name);
  };
  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 15, padding: 2, marginBottom: 15 }}>
        <Avatar sx={{
          mx: "auto",
          bgcolor: "secondary.main",
          textAlign: "center",
          mb: "1",
        }}>
          <AddCircleOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Add an Item
        </Typography>
        <Box
          component='form'
          sx={{ mt: 1 }}>
          <TextField
            id='itemId'
            label="Item Id"
            fullWidth
            autoFocus
            sx={{ mb: 2 }} />

          <TextField
            id='itemName'
            label="Item Name"
            fullWidth
            type='text'
            sx={{ mb: 2 }} />

          <TextField
            id='itemQty'
            label="Item Quantity"
            fullWidth
            type='text'
            sx={{ mb: 2 }} />

          <FormControl fullWidth>
            <InputLabel id="select-label">Item Category</InputLabel>
            <Select
              labelId="select-label"
              id="itemCategory"
              fullWidth
              label="Item Category"
              sx={{ mb: 2 }}
            >
              <MenuItem value="" disabled>
                Categories
              </MenuItem>
              <MenuItem value={10}>Garment</MenuItem>
              <MenuItem value={20}>Sports</MenuItem>
              <MenuItem value={30}>Household</MenuItem>
            </Select>
          </FormControl>

          <TextField
            multiline
            rows={4}
            id='itemDetails'
            fullWidth
            label="Item Details"
            type='text'
            sx={{ mb: 2 }} />

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <Button
            variant="contained"
            onClick={() => fileInputRef.current.click()}
            sx={{ backgroundColor: "purple" }}
          >
            Upload Image
          </Button>
          {fileName && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Selected file: {fileName}
            </Typography>
          )}
          <Button type='submit' variant='contained' fullWidth sx={{ mt: 4 }}>Submit</Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default Additem;
