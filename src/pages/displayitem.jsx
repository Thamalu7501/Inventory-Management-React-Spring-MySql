import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper,
    Button,
    Container,
    TextField,
    InputAdornment,
    Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Displayitem = () => {
    const rows = [
        { itemId: '', itemName: '', itemImage: 'http://localhost:8080/inventory/itemImage', itemQty: '', itemCategory: '', itemDetails: '' },
        { itemId: '', itemName: '', itemImage: 'http://localhost:8080/inventory/itemImage', itemQty: '', itemCategory: '', itemDetails: '' },
        { itemId: '', itemName: '', itemImage: 'http://localhost:8080/inventory/itemImage', itemQty: '', itemCategory: '', itemDetails: '' },
        { itemId: '', itemName: '', itemImage: 'http://localhost:8080/inventory/itemImage', itemQty: '', itemCategory: '', itemDetails: '' },
        { itemId: '', itemName: '', itemImage: 'http://localhost:8080/inventory/itemImage', itemQty: '', itemCategory: '', itemDetails: '' },
        { itemId: '', itemName: '', itemImage: 'http://localhost:8080/inventory/itemImage', itemQty: '', itemCategory: '', itemDetails: '' },
        { itemId: '', itemName: '', itemImage: 'http://localhost:8080/inventory/itemImage', itemQty: '', itemCategory: '', itemDetails: '' },
        { itemId: '', itemName: '', itemImage: 'http://localhost:8080/inventory/itemImage', itemQty: '', itemCategory: '', itemDetails: '' },
        { itemId: '', itemName: '', itemImage: 'http://localhost:8080/inventory/itemImage', itemQty: '', itemCategory: '', itemDetails: '' },
        { itemId: '', itemName: '', itemImage: 'http://localhost:8080/inventory/itemImage', itemQty: '', itemCategory: '', itemDetails: '' },];

    return (

        <TableContainer component={Paper} sx={{ marginTop: 10 }}>
            <Box sx={{width:'50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 2, marginLeft: 50}}>
                <TextField placeholder="Search items using Item Id or Item Name" fullWidth variant="outlined"  InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }} />
            </Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Item Id</strong></TableCell>
                        <TableCell><strong>Item Name</strong></TableCell>
                        <TableCell><strong>Item Image</strong></TableCell>
                        <TableCell><strong>Item Quantity</strong></TableCell>
                        <TableCell><strong>Item Category</strong></TableCell>
                        <TableCell><strong>Item Details</strong></TableCell>
                        <TableCell><strong>Action</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.itemId}</TableCell>
                            <TableCell>{row.itemName}</TableCell>
                            <TableCell><img
                                src={row.itemImage}
                                alt={row.itemName}
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            /></TableCell>
                            <TableCell>{row.itemQty}</TableCell>
                            <TableCell>{row.itemCategory}</TableCell>
                            <TableCell>{row.itemDetails}</TableCell>
                            <TableCell><Button>Update</Button><Button color='error'>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Displayitem;
