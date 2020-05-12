<?php
namespace Capas\CP\Block;

class OrderView 
{

    protected $_orderCollectionFactory;
    protected $_orderRepository;

    public function __construct(
        \Magento\Sales\Model\ResourceModel\Order\CollectionFactory $orderCollectionFactory,
        \Magento\Sales\Model\OrderRepository $orderRepository
    ) {
        $this->_orderCollectionFactory = $orderCollectionFactory;
        $this->_orderRepository = $orderRepository;

    }

    public function beforeSetLayout(\Magento\Sales\Block\Adminhtml\Order\View $view)
    {    
        
        
        $url = '/mymodule/controller/action/id/' . $view->getOrderId();

        $order = $this->_orderRepository->get($view->getOrderId());
        $shipping = $order->getShippingAddress();
        $firstname = $shipping->getFirstName();
        $lastName = $shipping->getLastName();
        $postCode = $shipping->getPostCode();
        $shipStr = $shipping->getStreet();
        $region = $shipping->getRegion(); 
       
        $message = $firstname . ' ' . $lastName . '\n'.  $shipStr[0] . '\n' . $postCode . ' ' . $region;
        
        $view->addButton(
            'order_myaction',
            [
                'label' => __('Copy address'),
                'class' => 'myclass',
                'onclick' => "clipboard('{$message}')"
            ]
        );


    }

}
