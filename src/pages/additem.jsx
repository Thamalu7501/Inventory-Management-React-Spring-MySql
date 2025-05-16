import React, { useRef, useState } from 'react';
import {
  Avatar, Box, Container, Paper, TextField, Typography,
  Button, Select, MenuItem, InputLabel, FormControl, FormHelperText
} from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Additem = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const validationSchema = Yup.object({
    itemId: Yup.string().required('Item ID is required'),
    itemName: Yup.string().required('Item Name is required'),
    itemQty: Yup.number().typeError('Quantity must be a number').required('Quantity is required'),
    itemCategory: Yup.string().required('Item Category is required'),
    itemDetails: Yup.string().required('Item Details are required'),
  });

  const formik = useFormik({
    initialValues: {
      itemId: '',
      itemName: '',
      itemQty: '',
      itemCategory: '',
      itemDetails: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
        <Box component='form' onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <TextField
            id='itemId'
            name='itemId'
            label="Item Id"
            fullWidth
            autoFocus
            value={formik.values.itemId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.itemId && Boolean(formik.errors.itemId)}
            helperText={formik.touched.itemId && formik.errors.itemId}
            sx={{ mb: 2 }}
          />

          <TextField
            id='itemName'
            name='itemName'
            label="Item Name"
            fullWidth
            value={formik.values.itemName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.itemName && Boolean(formik.errors.itemName)}
            helperText={formik.touched.itemName && formik.errors.itemName}
            sx={{ mb: 2 }}
          />

          <TextField
            id='itemQty'
            name='itemQty'
            label="Item Quantity"
            fullWidth
            value={formik.values.itemQty}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.itemQty && Boolean(formik.errors.itemQty)}
            helperText={formik.touched.itemQty && formik.errors.itemQty}
            sx={{ mb: 2 }}
          />

          <FormControl
            fullWidth
            error={formik.touched.itemCategory && Boolean(formik.errors.itemCategory)}
            sx={{ mb: 2 }}
          >
            <InputLabel id="select-label">Item Category</InputLabel>
            <Select
              labelId="select-label"
              id="itemCategory"
              name="itemCategory"
              value={formik.values.itemCategory}
              label="Item Category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <MenuItem value=""disabled>
                Categories
              </MenuItem>
              <MenuItem value="Garment">Garment</MenuItem>
              <MenuItem value="Sports">Sports</MenuItem>
              <MenuItem value="Household">Household</MenuItem>
            </Select>
            <FormHelperText>{formik.touched.itemCategory && formik.errors.itemCategory}</FormHelperText>
          </FormControl>

          <TextField
            id='itemDetails'
            name='itemDetails'
            label="Item Details"
            fullWidth
            multiline
            rows={4}
            value={formik.values.itemDetails}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.itemDetails && Boolean(formik.errors.itemDetails)}
            helperText={formik.touched.itemDetails && formik.errors.itemDetails}
            sx={{ mb: 2 }}
          />

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

          <Button type='submit' variant='contained' fullWidth sx={{ mt: 4 }}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Additem;
