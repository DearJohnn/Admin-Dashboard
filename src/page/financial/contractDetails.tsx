import { Card,Button,Descriptions } from "antd"
import {useNavigate, useSearchParams} from "react-router-dom"
import type { DescriptionsProps } from "antd";


const items: DescriptionsProps['items'] = [
    {
        key: '1',
        label: 'Contract Type',
        children: 'Lease Agreement',
    },
    {
        key: '2',
        label: 'Contract Name',
        children: 'Standard Residential Lease Agreement',
    },
    {
        key: '3',
        label: 'Start Date',
        children: '03/05/2023',
    },
    {
        key: '4',
        label: 'End Date',
        children: '03/05/2024',
    },
    {
        key: '5',
        label: 'Client',
        children: 'Evergreen Tech Inc.',
    },
    {
        key: '6',
        label: 'Service Provider',
        children: 'NexSpace LLC',
        span: 3,
    },
    {
        key: '7',
        label: 'Approval Status',
        children: 'Rejected',
    },
    {
        key: '8',
        label: 'Reason for Rejection',
        children: 'Missing authorized company seal.',
    },
    {
        key: '9',
        label: 'Contact Number',
        children: '(617) 555-8888',
    },
    {
        key: '10',
        label: 'Additional Terms',
        children: (
            <>
                1. Rent is paid semiannually under a one-year lease.
                <br />
                2. Air conditioning costs are included.
                <br />
                3. Includes the right to use two parking spaces (EV chargers not included).
                <br />
                4. Renovation work is not allowed between 9:00 AM and 6:00 PM.
            </>
        ),
    },
];

const items2: DescriptionsProps['items'] = [
    {
        key: '1',
        label: 'Building',
        children: 'Office Building A1',
    },
    {
        key: '2',
        label: 'Room No.',
        children: '406',
    },
    {
        key: '3',
        label: 'Gross Area',
        children: '1,033 sq ft',
    },
    {
        key: '4',
        label: 'Billable Area',
        children: '753 sq ft',
    },
    {
        key: '5',
        label: 'Property Management Fee',
        children: '$6,800',
    },
    {
        key: '6',
        label: 'Unit Condition',
        children: 'Fully Furnished',
    },
    {
        key: '7',
        label: 'Property Manager',
        children: 'Wendy Cai',
    },
    {
        key: '8',
        label: 'Phone Number',
        children: '(617) 555-7777',
    },
];

function ContractDetails(){

    const navigate = useNavigate();
    const [searchParmas] = useSearchParams();
    return <div>
        <Card className="mb">
            <Button type="primary" onClick={()=>navigate("/finance/contract?return=true")}>Back</Button>
        </Card>
        <Card>
            <Descriptions title={`Contract ID:${searchParmas.get("contractId")}`} bordered items={items}/>
            <Descriptions title="Leased Unit Information" items={items2} className="mt"/>
        </Card>
    </div>
}

export default ContractDetails