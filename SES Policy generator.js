// Policy-1655523134821

const ARN [Amazon Resource Name] = {  
    # arn:aws:ses:us-east-2:002655968841:identity/team.eventizer@gmail.com
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "stmt1655526718007",
            "Effect": "ALLOW",
            "Resource": "arn:aws:ses:us-east-2:002655968841:identity/team.eventizer@gmail.com",
            "Action": [
                "ses:SendEmail",
                "ses:SendTemplatedEmail",
                "ses:SendBulkTemplatedEmail"
            ],
            "Principal": {
                "AWS": [
                    "002655968841"
                ]
            },
            "Condition": {}
        }
    ]
}
