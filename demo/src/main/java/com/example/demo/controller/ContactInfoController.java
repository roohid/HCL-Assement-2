/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.controller;

import com.example.demo.entities.ContactInfo;
import com.example.demo.service.ContactInfoService;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Mohammed Roohid
 */
@RestController
@RequestMapping("contactinfo")
public class ContactInfoController {

    @Autowired
    ContactInfoService contactInfoService;


    @RequestMapping(
            value = "/create",
            produces = "application/json",
            method = {RequestMethod.POST})
    public ResponseEntity addContactInfo(@RequestBody ContactInfo entity) {
        ContactInfo response = contactInfoService.create(entity);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping("/getContactInfoById/{id}")
    public ContactInfo getByDesc(@PathVariable(value = "id") int id) {
        return contactInfoService.getContactInfoById(id);

    }

    @RequestMapping(
            value = "/insertDB",
            produces = "application/json",
            method = {RequestMethod.GET})
    public ResponseEntity insertDB() {
        List<ContactInfo> response = contactInfoService.create(sampleData());
        return ResponseEntity.ok().body(response);
    }

    @RequestMapping(
            value = "/getAllContactInfo",
            produces = "application/json",
            method = {RequestMethod.GET})
    public List<ContactInfo> getAllContactInfo() {
        List<ContactInfo> response = contactInfoService.findAllContactInfo();
        return response;
    }

    public List<ContactInfo> sampleData() {

        List<ContactInfo> contactInfos = new ArrayList<>();
        ContactInfo contactInfo = new ContactInfo();
        contactInfo.setName("Mohammed Roohid");
        contactInfo.setEmail("roohidm@gmail.com");
        contactInfo.setAddress("Ambur");
        contactInfo.setMobile(90428889);
        contactInfo.setGender("Male");
        System.err.println("11entity111" + contactInfo);

        ContactInfo entity2 = new ContactInfo();
        entity2.setName("Ganesh Kumar");
        entity2.setEmail("ganeshgm@gmail.com");
        entity2.setAddress("Chennai");
        entity2.setGender("Male");
        entity2.setMobile(88428888);

        ContactInfo entity3 = new ContactInfo();
        entity3.setName("Muddassir");
        entity3.setEmail("muddasirmca@gmail.com");
        entity3.setAddress("Gudiyatham");
        entity3.setMobile(78842888);
        entity3.setGender("Male");

        ContactInfo entity4 = new ContactInfo();
        entity4.setName("Rashid");
        entity4.setEmail("rashidmca@gmail.com");
        entity4.setAddress("Vellore");
        entity4.setMobile(98941490);
        entity4.setGender("Male");

        ContactInfo entity5 = new ContactInfo();
        entity5.setName("Suresh");
        entity5.setEmail("suresh@gmail.com");
        entity5.setAddress("Banglaore");
        entity5.setMobile(98989898);
        entity5.setGender("Male");

        contactInfos.addAll(Arrays.asList(contactInfo, entity2, entity3, entity4, entity5));
        return contactInfos;

    }
}
