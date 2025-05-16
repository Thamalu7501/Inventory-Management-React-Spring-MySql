package backend.controller;

import backend.model.InventoryModel;
import backend.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;

@RestController
@CrossOrigin("http://localhost:3000")
public class InventoryController {

 @Autowired
 private InventoryRepository inventoryrepository;

 @PostMapping(value = "/inventory", consumes = "multipart/form-data")
 public ResponseEntity<String> addInventoryWithImage(
         @RequestParam("itemId") String itemId,
         @RequestParam("itemName") String itemName,
         @RequestParam("itemQty") String itemQty,
         @RequestParam("itemCategory") String itemCategory,
         @RequestParam("itemDetails") String itemDetails,
         @RequestParam("itemImage") MultipartFile file
 ) {
  // Save file to disk
  String folder = "src/main/uploads/";
  String fileName = file.getOriginalFilename();

  try {
   File uploadDir = new File(folder);
   if (!uploadDir.exists()) {
    uploadDir.mkdirs(); // create folders if needed
   }
   file.transferTo(Paths.get(folder + fileName));
  } catch (IOException e) {
   e.printStackTrace();
   return ResponseEntity.badRequest().body("File upload failed");
  }

  // Save other fields to DB
  InventoryModel newItem = new InventoryModel();
  newItem.setItemId(itemId);
  newItem.setItemName(itemName);
  newItem.setItemQty(itemQty);
  newItem.setItemCategory(itemCategory);
  newItem.setItemDetails(itemDetails);
  newItem.setItemImage(fileName); // store the filename

  inventoryrepository.save(newItem);

  return ResponseEntity.ok("Item added successfully!");
 }
}
