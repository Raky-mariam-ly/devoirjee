package com.elearning.gateway;

public interface PaiementGateway {
    boolean effectuerPaiement(Long utilisateurId, double montant);
}
