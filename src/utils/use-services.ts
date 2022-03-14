import React, { useContext } from "react";
import { ServicesContext } from "../store/provider";
import Service from '../services';

/**
 * Хук для доступа к объекту
 * @return {ServicesContext}
 */
export default function useServices(): Service {
    return useContext(ServicesContext) as Service;
}
