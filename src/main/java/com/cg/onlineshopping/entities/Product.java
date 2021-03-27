package com.cg.onlineshopping.entities;

/**
 * @author Swaroop M
 * Code starts here
 */

import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(description = "Stores the details of the products")
public class Product implements Serializable {

	private static final long serialVersionUID = 6031109082554084714L;

	@Id // to specify the primary key of an entity
	@SequenceGenerator(name = "product_sequence", allocationSize = 1) // To preserve the sequence of IDs
	// @GeneratedValue is used to specify how the primary key should be generated
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "product_sequence")
	private Integer productId;
	private String productName;
	private String dimension;
	private String specification;
	private String manufacturer;
	private Integer quantity;
	// Extra functionality added(Picture)
	private String pictureUrl;
	private Double price;

	// Establishing a one to one relationship with the Product table and Category
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER) // cascade type all is shorthand for all of the
																	// cascade operations.
	@JoinColumn(name = "catId") // catId is foreign key
	private Category category;

	// Constructor without ID for testing purpose
	public Product(String productName, String dimension, String specification, String manufacturer, Integer quantity,
			String pictureUrl, Double price, Category category) {
		super();
		this.productName = productName;
		this.dimension = dimension;
		this.specification = specification;
		this.manufacturer = manufacturer;
		this.quantity = quantity;
		this.pictureUrl = pictureUrl;
		this.price = price;
		this.category = category;
	}

}
