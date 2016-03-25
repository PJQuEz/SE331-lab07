package camt.se331.shoppingcart.repository;

import camt.se331.shoppingcart.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by พีรพัฒน์ on 25/3/2559.
 */
public interface ProductRepository extends JpaRepository<Product,Long> {

            }
