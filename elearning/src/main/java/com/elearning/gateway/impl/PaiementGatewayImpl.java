package com.elearning.gateway.impl;

import com.elearning.gateway.PaiementGateway;
import org.springframework.stereotype.Service;

@Service
public class PaiementGatewayImpl implements PaiementGateway {
    @Override
    public boolean effectuerPaiement(Long utilisateurId, double montant) {
        // Simuler un appel à un service de paiement externe
        System.out.println("Paiement effectué pour l'utilisateur ID : " + utilisateurId + ", Montant : " + montant);
        return true; // Simuler un succès
    }
}
