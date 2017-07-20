module.exports = {
    organizations: function(criteria) {
        return {
            where: {
                $or: {
                    Idn: {
                        $like: criteria + '%'
                    },
                    Name: {
                        $like: criteria + '%'
                    },
                }
            }
        };
    },
    corpUsers: function(criteria) {
        return {
            where: {
                $or: {
                    Idn: {
                        $like: criteria + '%'
                    },
                    $or: {
                        LastName: {
                            $like: criteria + '%'
                        },
                        FirstName: {
                            $like: criteria + '%'
                        },
                        MiddleName: {
                            $like: criteria + '%'
                        }
                    }
                }
            }
        };
    }
};