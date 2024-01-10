package com.linkein.demo.springboot.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Users")
public class User implements Serializable {
  @Id
  private String id;
  private String userName;
  private String lastName;


  @DBRef//The @DBRef annotation is used in Spring Data MongoDB to
  // establish a reference to another document in the MongoDB database.
  // It allows you to define relationships between
  // documents and enables the retrieval of related documents when querying.
  private Role role;
  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }
  public String getUserName() {
    return userName;
  }
  public void setUserName(String userName) {
    this.userName = userName;
  }
  public String getLastName() {
    return lastName;
  }
  public void setLastName(String lastName) {
    this.lastName = lastName;
  }
  public Role getRole() {
    return role;
  }
  public void setRole(Role role) {
    this.role = role;
  }
}
