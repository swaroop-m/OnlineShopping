package com.cg.onlineshopping.config;

/**
 * @author Swaroop M
 * Code starts here
 */

import java.util.Collections;

import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootConfiguration
@Configuration
public class SwaggerConfig {

	@Bean
	public Docket productApi() {
		
		//Configure Swagger and return Docket instace
		return new Docket(DocumentationType.SWAGGER_2)		
				.select()
				.paths(PathSelectors.regex("/api.*"))	
				.apis(RequestHandlerSelectors.basePackage("com.cg.onlineshopping"))
				.paths(PathSelectors.any())				
				.build()
				.apiInfo(metoInfo());
	}

	private ApiInfo metoInfo() {
		// Customize the Swagger output
		ApiInfo apiInfo = new ApiInfo(
				"Online Shopping Project API", 
				"OS API Created by Group 8", 
				"1.0", 
				"Terms of Service", 
				new Contact("Group 8", "website url", ""), 
				"Group 8 Licence v.1.0", 
				"LICENSE URL",
				Collections.emptyList());
		return apiInfo;
	}

}