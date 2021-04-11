package com.cg.onlineshopping.entities;

/**
 * @author Swaroop M
 * Code starts here
 */
import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(description = "Stores the categories of the products")
public class Category implements Serializable {

	private static final long serialVersionUID = -7802906157358007048L;

	@Id // to specify the primary key of an entity
	@SequenceGenerator(name = "category_sequence", allocationSize = 1) // To preserve the sequence of IDs
	// @GeneratedValue is used to specify how the primary key should be generated
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "category_sequence")
	private Integer catId;
	private String categoryName;

}

/**
 * @author Swaroop M Code ends here
 */