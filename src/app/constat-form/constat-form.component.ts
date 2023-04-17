
import { Component,ViewChild,ElementRef  } from '@angular/core';
import {Form, FormBuilder , FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatExpansionPanel } from '@angular/material/expansion';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FormArray } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ConstatService } from '../_services/constat-service.service';

export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}


@Component({
  selector: 'app-constat-form',
  templateUrl: './constat-form.component.html',
  styleUrls: ['./constat-form.component.css'],providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ]
})
export class ConstatFormComponent {
  activedStep = 0;

  model = {};
  steps: StepType[] = [
    {
      label: 'Constat Informations',
      fields: [
        {
          key: 'date',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: "Date de l'accident",
            required: true
          },
        },
        {
          key: 'place',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Lieu de l\'accident',
            required: true,
            placeholder:'eaze'
          },
        },
        {
          key: 'injuries',
          type: 'checkbox',
          templateOptions: {
            label: 'Personnes blessées',
            required: false,
          },
        },
        {
          key: 'materialDamage',
          type: 'checkbox',
          templateOptions: {
            label: 'Dommages matériels externes',
            required: false,
          },
        },
      ],
    },
    {
      label: "Information sur l'Assurence ",
      fields: [
        {
          key: 'insurenceCompanyName',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Nom de l\'Assurance',
            required:true,
          },
        },
        {
          key: 'insurenceCompanyNumber',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Numéro de l\'Assurance',
            required:true,
          },
        },
        {
          key: 'agencyName',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Nom de l\'Agence',
            required:true,
          },
        },
        {
          key: 'beginDate',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'date de début',
            required:true,
          },
        },
        {
          key: 'endDate',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'date de fin de validité d assurance',
            required:true,
          },
        },
    ]
  },
  {
    label: 'Identité du conducteur',
    fields: [
      {
        key: 'driverLastName',
        type: 'input',
        templateOptions: {
          type: 'input',
          label: 'Nom du conducteur',
          required:true,
        },
      },
      {
        key: 'driverFirstName',
        type: 'input',
        templateOptions: {
          type: 'input',
          label: 'Prénom du conducteur',
          required:true,
        },
      },
      {
        key: 'driverAddress',
        type: 'input',
        templateOptions: {
          type: 'input',
          label: 'Adresse du conducteur',
          required:true,
        },
      },
      {
        key: 'licenceNumber',
        type: 'input',
        templateOptions: {
          type: 'input',
          label: 'numéro de licence du conducteur',
          required:true,
        },
      },
      {
        key: 'licenceDate',
        type: 'input',
        templateOptions: {
          type: 'date',
          label: 'validité de licence du conducteur',
          required:true,
        },
      },
  ],
  
},
    {
      label: 'Témoins',
      fields: [
        {
          key: 'witnessFullName',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Nom complet du témoin',
            required: false,
          },
        },
        {
          key: 'witnessAddress',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Adresse du témoin',
            required: false,
          },
        },
        {
          key: 'witnessPhone',
          type: 'input',
          templateOptions: {
            type: 'phone',
            label: 'numéro du témoin',
            required:false,
          },
        },
      ],
    },
    {
    label: "Identité d'Assuré",
    fields: [
      {
        key: 'insuredLastName',
        type: 'input',
        templateOptions: {
          type: 'input',
          label: 'Nom de l\'Assuré',
          required:true,
        },
      },
      {
        key: 'insuredFirstName',
        type: 'input',
        templateOptions: {
          type: 'input',
          label: 'Prénom de l\'Assuré ',
          required:true,
        },
      },
      {
        key: 'insuredAddress',
        type: 'input',
        templateOptions: {
          type: 'input',
          label: 'Adresse de l\'Assuré',
          required:true,
        },
      },
      {
        key: 'insuredPhone',
        type: 'input',
        templateOptions: {
          type: 'input',
          label: 'numéro de téléphone de l\'Assuré',
          required:true,
        },
      },
  ],
},
    
    {
      label: 'Identité du véhicule',
      fields: [
        {
          key: 'carBrand',
          type: 'select',
          templateOptions: {
            label: 'Marque de voiture',
            required: true,
            options: [
              { label: 'Alfa Romeo', value: 'Alfa Romeo' },
              { label: 'Audi', value: 'Audi' },
              { label: 'BAIC YX', value: 'BAIC YX' },
              { label: 'BMW', value: 'BMW' },
              { label: 'Chery', value: 'Chery' },
              { label: 'Chevrolet', value: 'Chevrolet' },
              { label: 'Citroën', value: 'Citroën' },
              { label: 'Dacia', value: 'Dacia' },
              { label: 'DFSK', value: 'DFSK' },
              { label: 'Dongfeng', value: 'Dongfeng' },
              { label: 'Fiat', value: 'Fiat' },
              { label: 'Ford', value: 'Ford' },
              { label: 'Foton', value: 'Foton' },
              { label: 'Geely', value: 'Geely' },
              { label: 'Great Wall', value: 'Great Wall' },
              { label: 'Haval', value: 'Haval' },
              { label: 'Honda', value: 'Honda' },
              { label: 'Hyundai', value: 'Hyundai' },
              { label: 'Isuzu', value: 'Isuzu' },
              { label: 'Jaguar', value: 'Jaguar' },
              { label: 'Jeep', value: 'Jeep' },
              { label: 'Kia', value: 'Kia' },
              { label: 'Lada', value: 'Lada' },
              { label: 'Land Rover', value: 'Land Rover' },
              { label: 'Mahindra', value: 'Mahindra' },
              { label: 'Mazda', value: 'Mazda' },
              { label: 'Mercedes', value: 'Mercedes' },
              { label: 'MG Motors', value: 'MG Motors' },
              { label: 'Mini', value: 'Mini' },
              { label: 'Mitsubitshi', value: 'Mitsubitshi' },
              { label: 'Nissan', value: 'Nissan' },
              { label: 'Opel', value: 'Opel' },
              { label: 'Peugeot', value: 'Peugeot' },
              { label: 'Porshe', value: 'Porshe' },
              { label: 'Renault', value: 'Renault' },
              { label: 'Seat', value: 'Seat' },
              { label: 'Škoda', value: 'Škoda' },
              { label: 'SsangYong', value: 'SsangYong' },
              { label: 'Suzuki', value: 'Suzuki' },
              { label: 'Toyota', value: 'Toyota' },
              { label: 'Volkswagen', value: 'Volkswagen' },
              { label: 'volkswagen Utilitaires', value: 'volkswagen Utilitaires' },
              { label: 'Wallys', value: 'Wallys' },
            ]}
        },
        {
          key: 'carType',
          type: 'select',
          templateOptions: {
            label: 'Marque de voiture',
            required: true,
      options: [
      { label: 'SUV', value: 'SUV' },
      { label: 'CUV', value: 'CUV' },
      { label: 'Camionette', value: 'Camionette' },
      { label: 'camion', value: 'camion' },
      ]}
        },
        {
          key: 'carPlate',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Plaque d\'immatriculation',
            required: true,
          },
        },
        {
          key: 'carDirection',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Direction du véhicule',
            required: true,
          },
        },
      ],
    },
{
  label: ' Other Informations',
  fields: [
    {
      key: 'apperantDamage',
      type: 'input',
      templateOptions: {
        type: 'input',
        label: 'Dammages apparents',
        required: true,
      },
    },
    {
      key: 'observation',
      type: 'input',
      templateOptions: {
        type: 'textarea',
        label: 'Observations',
        required: true,
      },
    },
    {
      key: 'signature',
      type: 'input',
      templateOptions: {
        label: 'Signature',
        required: true,
      },
    },
    {
      key: 'initialChocPoint',
      type: 'input',
      templateOptions: {
        label: 'Croquis',
        required: true,
      },
    },
   /* {
      key: 'circumstances',
      type: 'select',
      props: {
        label: 'Circumstances',
        multiple: true,
        options: [
          { value: 'EN_STATIONNEMENT', label: 'En stationnement' },
          { value: 'QUITTE_UN_STATIONNEMENT', label: 'Quittait un stationnement' },
          { value: 'PRENAINT_UN_STATIONNEMENT', label: 'Prenait un stationnement' },
          { value: 'SORTAIT_DU_PARKING', label: 'Sortait du parking' },
          { value: 'ENGAGEAIT_SUR_UNE_PLACE_A_SENS_GIRATOIRE', label: "S'engageait sur une place à sens giratoire" },
          { value: 'ROULAIT_SUR_UNE_PLACE_A_SENS_GIRATOIRE', label: 'Roulait sur une place à sens giratoire' },
          { value: 'HEURTAIT_DANS_LE_MEME_SENS_ET_SUR_FIL_DIFFERENTE', label: 'Heurtait dans le même sens et sur file différente' },
          { value: 'CHANGEAIT_DE_FIL', label: 'Changeait de fil' },
          { value: 'DOUBLAIT', label: 'Doublait' },
          { value: 'VIRAIT_A_GAUCHE', label: 'Virait à gauche' },
          { value: 'VIRAIT_A_DROITE', label: 'Virait à droite' },
          { value: 'RECULAIT', label: 'Reculait' },
          { value: 'EMPIETAIT_SUR_UNE_VOIE_RESERVE_A_LA_CIRCULATION_EN_SENS_INVERSE', label: "Empiétait sur une voie réservée à la circulation en sens inverse" },
          { value: 'VENAIT_DE_DROIT_DANS_UN_CARREFOUR', label: 'Venait de droit dans un carrefour' },
          { value: 'ABSENCE_D_OBSERVATION_DU_SIGNAL_DE_PRIORITE', label: 'Absence d\'observation du signal de priorité' }
        ]
      }
    }*/
    
  ],
}
  ];
constructor(private constatService:ConstatService) {}
  
  form:any = new FormArray(this.steps.map(() => new FormGroup({})));
  options = this.steps.map(() => <FormlyFormOptions> {});

  prevStep(step: number) {
    this.activedStep = step - 1;
  }

  nextStep(step: number) {
    this.activedStep = step + 1;
  }
  onSubmit() {
    const constatData = this.model;
    this.constatService.creatConstat(this.model).subscribe(response => {
      console.log(response);
    });
  }
  

  submit() {
    this.constatService.creatConstat(JSON.stringify(this.model)).subscribe(response => {
      console.log(response);
    });
    alert(JSON.stringify(this.model));
  }
}
