/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.service;

import com.example.demo.entities.ContactInfo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repositories.ContactInfoRepository;

/**
 *
 * @author Mohammed Roohid
 */
@Service
public class ContactInfoService {

    @Autowired
    ContactInfoRepository contactInfoRepository;

    public ContactInfo create(ContactInfo restaurant) {
        return contactInfoRepository.save(restaurant);
    }

    public List<ContactInfo> create(List<ContactInfo> restaurant) {
        return contactInfoRepository.saveAll(restaurant);
    }
    
    public ContactInfo getContactInfoById(int id) {
        return contactInfoRepository.getContactInfoById(id);
    }
    
    public List<ContactInfo> findAllContactInfo() {
        return contactInfoRepository.findAll();
    }
}
