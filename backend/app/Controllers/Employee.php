<?php

namespace app\Controllers;

use vendor\Controller;
use app\Models\Employee as EmployeeModel;

class Employee extends Controller
{
    private $em;

    public function __construct()
    {
        $this->em = new EmployeeModel();
    }

    public function getUsers()
    {
        if (isset($_POST['id'])) {
            $id = $_POST['id'];
            return $this->em->getUser($id);
        } else {
            return $this->em->getUsers();
        }
    }

    public function newUser()
    {
        $name = $_POST['name'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $workdate = $_POST['workdate'];
        $address = $_POST['address'];
        return $this->em->newUser($name, $password,$workdate,$address, $email, $phone);
    }

    public function removeUser()
    {
        $id = $_POST['id'];
        return $this->em->removeUser($id);
    }

    public function updateUser()
    {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $workdate = $_POST['workdate'];
        $address = $_POST['address'];
        return $this->em->updateUser($id,$name, $password, $email,$phone,$workdate, $address);
    }
}
