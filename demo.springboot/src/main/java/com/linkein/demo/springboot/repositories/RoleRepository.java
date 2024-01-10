package com.linkein.demo.springboot.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.linkein.demo.springboot.entities.Role;

@Repository
public interface RoleRepository extends MongoRepository<Role,String>{}
