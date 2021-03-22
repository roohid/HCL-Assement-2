/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.repositories;

import com.example.demo.entities.ContactInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author Mohammed Roohid K
 */
public interface ContactInfoRepository extends JpaRepository<ContactInfo, Long> {

    @Query(value = "SELECT c FROM ContactInfo c WHERE c.id =?1 ")
    public ContactInfo getContactInfoById(int id);
}
